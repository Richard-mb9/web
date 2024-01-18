import React, { useState, useEffect} from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import PageLoading from '../components/PageLoading';
import { useRedirect } from '../../context/Redirect';
import { createUser } from '../../integrations/users';
import { getToken } from '../../integrations/token';
import TokenManager from '../../commons/TokenManager';

type AlertType = 'error' | 'warning' | 'info' | 'success';
type displayAlertType = 'none' | 'block';

const theme = createTheme();

export default function Register() {
    const [email, setEmail] = useState<string>('');
    const [textEmailError, setTextEmailError] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [textUsernameError, setTextUsernameError] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [textPasswordError, setTextPasswordError] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [textConfirmPasswordError, setTextConfirmPasswordError] = useState<string>('');
    const [textAlert, setTextAlert] = useState<string>('');
    const [alertType, setAlertType] = useState<AlertType>('error');
    const [displayAlert, setDisplayAlert] = useState<displayAlertType>('none');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [ redirect ] = useRedirect();

    const renderAlert = (type: AlertType, text: string) => {
        setTextAlert(text);
        setAlertType(type);
        setDisplayAlert('block');
    }   

    const validatePassword = ()=>{
        if(password.length < 8){
            setTextPasswordError('A Senha deve conter pelo menos 8 digitos');
            return false;
        }
        if(password !== confirmPassword){
            setTextConfirmPasswordError('A senha e a confirmação de senha devem ser iguais');
            setTextPasswordError('A senha e a confirmação de senha devem ser iguais');
            return false;
        }
        setTextConfirmPasswordError("");
        setTextPasswordError("");
        return true;
    }

    const validateEmail = () => {
        const regex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if(!!!email || !regex.test(email)){
          setTextEmailError("Email Invalido");
          return false
        }
        setTextEmailError("");
        return true;
      }

    const validateFields = ()=>{
        let isValid = true
        if(!validatePassword()) isValid = false;
        if (!validateEmail()) isValid = false;
    
        if(!!!username){
            isValid = false;
            setTextUsernameError("nome de usuario invalido!");
        } 
        else {setTextUsernameError("")}
        return isValid
    }
    
    useEffect(()=>{
        if(textEmailError || textUsernameError || textPasswordError || textConfirmPasswordError){
            validateFields()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email, username, password, confirmPassword]);

    const validate = ()=>{
        if(!validateFields()) return false
        if(!validatePassword()) return false
        return true
    }

    const save = async () => {
        setIsLoading(true);
        if(validate()){
            try{
                await createUser({email, password, username})
                const response = await getToken({emailOrUsername: email, password});
                TokenManager.setAccessToken(response.data.accessToken, response.data.refreshToken)
                redirect('/plans');
            }catch(error: unknown){
                if(axios.isAxiosError(error)){
                    if(error.response?.status === 401){
                        redirect('/login');
                    }
                    else if(error.response?.status === 409){
                        renderAlert('error', 'Este email ou nome de usuario ja esta sendo usado!');
                    }
                    else {
                        renderAlert('error', 'Tivemos um erro de comunicação, Por favor tente mais tarde!');
                    }
                }
            }
            finally {
                setIsLoading(false);
            }
        }
        setIsLoading(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <PageLoading open={isLoading}/>
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
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Cadastrar
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} display={displayAlert}>
                                <Alert severity={alertType} sx={{textAlign: "center"}}>{textAlert}</Alert>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={!!textUsernameError}
                                    fullWidth
                                    id="username"
                                    label="username"
                                    name="username"
                                    autoComplete="username"
                                    value={username}
                                    onChange={(event)=>setUsername(event.target.value)}
                                />
                                <p style={{margin: 0, color: "red"}}>{textUsernameError}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={!!textEmailError}
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(event)=>setEmail(event.target.value)}
                                />
                                <p style={{margin: 0, color: "red"}}>{textEmailError}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={!!textPasswordError}
                                    fullWidth
                                    name="password"
                                    label="Senha"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    autoComplete="new-password"
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
                                <p style={{margin: 0, color: "red"}}>{textPasswordError}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={!!textConfirmPasswordError}
                                    fullWidth
                                    name="confirm-password"
                                    label="Confirme sua senha"
                                    type={showPassword ? "text" : "password"}
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={(event)=>setConfirmPassword(event.target.value)}
                                    InputProps={{endAdornment:(
                                    <IconButton
                                        onClick={()=>setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
                                    </IconButton>
                                    )}}
                                />
                                <p style={{margin: 0, color: "red"}}>{textConfirmPasswordError}</p>
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={()=>save()}
                        >
                            Cadastrar
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Ja tenho uma conta
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}