import React from 'react';
import {
    Container,
    Typography,
  } from '@mui/material';

export default function AboutUs(){
    return (
        <Container maxWidth="md" style={{ textAlign: 'center', padding: '40px 10px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Nós criamos seu site!
            </Typography>
            <Typography variant="subtitle1" component="p" gutterBottom sx={{textAlign: "left", padding: "10px", boxSizing: "border-box"}}>
              Na Sua Page, nós não apenas construímos websites; criamos experiências digitais memoráveis. Nossos serviços são projetados para elevar sua presença online e impulsionar resultados reais.<br/>
              Escolha a Sua Page e dê vida à sua visão digital. Combinamos expertise técnica com uma compreensão profunda das necessidades do seu negócio, garantindo que cada projeto não só atenda, mas exceda suas expectativas. Estamos comprometidos em fornecer soluções que impulsionem o crescimento, aumentem o engajamento e solidifiquem sua presença online. Contate-nos hoje e inicie sua jornada digital com a Sua Page!
            </Typography>
        </Container>
    )
}