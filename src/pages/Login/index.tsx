import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import TokenManager from '../../commons/TokenManager';
import PageLoading from '../components/PageLoading';
import { useRedirect } from '../../context/Redirect';
import { AlertType } from '../../context/Alert';
import { getToken }from '../../integrations/token';

type displayAlertType = 'none' | 'flex';

const theme = createTheme();

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState<string>('');
  const [textAlert, setTextAlert] = useState<string>('')
  const [alertType, setAlertType] = useState<AlertType>('error')
  const [displayAlert, setDisplayAlert] = useState<displayAlertType>('none')
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [redirect] = useRedirect();

  const renderAlert = (type: AlertType, text: string) => {
    setTextAlert(text);
    setAlertType(type);
    setDisplayAlert('flex');
  }

  const send = async ()=>{
    try{
      const response = await getToken(
        {
          emailOrUsername,
          password,
        }
      )
      
      if(response.status === 200){
        TokenManager.setAccessToken(response.data.accessToken, response.data.refreshToken);
        redirect('/plans');
      }
    }
    catch (error: unknown){
      if(axios.isAxiosError(error) && error.response){
        if(error.response.status === 423){
          renderAlert('error', 'Usuario temporariamente bloqueado por excesso de tentativas, tente novamente após 10 minutos');
        }
        else if(error.response.status >= 400 && error.response.status < 500 ){
          renderAlert('error', 'verfique suas credenciais');
        }
      }
    }
    setIsLoading(false)
  }

  return  TokenManager.isAuthenticated() ? < Navigate to="/plans"/> : (
    <ThemeProvider theme={theme}>
      <PageLoading open={isLoading} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box >
            <Alert sx={{display: displayAlert }} severity={alertType}>{textAlert}</Alert>
          </Box>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="emailOrUsername"
              label="Email ou Username"
              name="emailOrUsername"
              autoComplete="emailOrUsername"
              autoFocus
              value={emailOrUsername}
              onChange={(event)=>setEmailOrUsername(event.target.value)}
              inputProps={{
                "data-test-id": "input-email",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              InputProps={{endAdornment:(
                <IconButton
                  onClick={()=>setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
                </IconButton>
              )}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="lembrar-me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>send()}
              data-testid="button-login"
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueci minha senha
                </Link>
              </Grid>
              <Grid item>
                <Link href="register" variant="body2">
                  Cadastre-se
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}