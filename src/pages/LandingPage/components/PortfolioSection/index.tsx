import React from 'react';
import { Button, Typography, Container } from '@mui/material';

function PortfolioSection() {
    return (
        <Container maxWidth="md" style={{ textAlign: 'center', padding: '40px 10px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Conheça Nosso Portfólio
            </Typography>
            <Typography variant="subtitle1" component="p" gutterBottom>
                Descubra por que somos a escolha certa para transformar suas ideias em realidade digital.
            </Typography>
            <Button variant="contained" color="primary" href="URL_DO_SEU_PORTFOLIO" target="_blank">
                Veja Nosso Portfólio
            </Button>
        </Container>
    );
}

export default PortfolioSection;
