// NewsletterSubscribe.tsx
import React, { useState } from 'react';
import './index.css';
import { IconButton, TextField } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const style = {
    input: {color: 'white'},
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
    },
    ":hover": {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
    },

    '@media (min-width: 769px)': {
        width: '500px',
        margin: 'auto'
    },

    '@media (max-width: 768px)': {
        width: 'calc(100% - 10px)',
        margin: 'auto'
    }
}

export default function NewsletterSubscribe(){
  const [email, setEmail] = useState('');

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO
    console.log(email);
  };

  return (
    <div className="newsletter-container">
        <h2>Inscreva-se na nossa newsletter</h2>
        <p>Não perca a chance de estar entre os primeiros a saber sobre nossas novidades e atualizações.</p>
        <form onSubmit={handleSubscribe} className="newsletter-form">
            <TextField
                margin="normal"
                name="seuEmail"
                label="Seu Email"
                type={"text"}
                id="seuEmail"
                autoComplete="email"
                value={email}
                sx={style}
                onChange={e => setEmail(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                    style: {color: 'white'}
                }}
                InputProps={{endAdornment:(
                    <IconButton>
                        <NotificationsNoneIcon sx={{color: 'white'}}/>
                    </IconButton>
              )}}
            />
        </form>
    </div>
  );
};
