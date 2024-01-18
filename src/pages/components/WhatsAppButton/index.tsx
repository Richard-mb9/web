import React from 'react';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function  WhatsAppButton(){
    const phoneNumber: string = '5511999999999'; // Substitua pelo seu número no formato internacional
    const message: string = encodeURIComponent('Olá, gostaria de saber mais sobre os serviços da Sua Page!');

    const whatsappUrl: string = `https://wa.me/${phoneNumber}?text=${message}`;

    const buttonStyle = {
        backgroundColor: '#25D366', // Cor do WhatsApp
        color: 'white', // Cor do texto
        '&:hover': {
            backgroundColor: '#128C7E', // Cor mais escura para o estado hover
        },
    };

    return (
        <Button 
            variant="contained" 
            href={whatsappUrl} 
            target="_blank"
            startIcon={<WhatsAppIcon />}
            style={buttonStyle}
        >
            Contatar no WhatsApp
        </Button>
    );
}

