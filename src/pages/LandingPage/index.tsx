import React from 'react';
import {
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  styled,
} from '@mui/material';

import './index.css';
import PortfolioSection from './components/PortfolioSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import AboutUs from './components/AboutUs';

// Estilização usando styled do @mui/system
const HeroContent = styled('div')({
  padding: '8rem 0 6rem',
  background: '#f5f5f5',
  borderRadius: '12px',
});

const HeroTitle = styled(Typography)({
  color: '#333',
});

const HeroSubtitle = styled(Typography)({
  color: '#555',
});

const HeroButtons = styled('div')({
  marginTop: '2rem',
});

const StyledPaper = styled(Paper)({
  padding: '2rem',
  textAlign: 'center',
  borderRadius: '12px',
});

const SectionTitle = styled('div')({
  marginTop: '4rem',
});

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});


const CardContentWrapper = styled(CardContent)({
  flexGrow: 1,
});

export default function LandingPage(){
  return (
    <React.Fragment>
      <main>
        <HeroContent>
          <Container maxWidth="md">
            <HeroTitle variant="h2" align="center" gutterBottom>
              Bem-vindo à Sua Page!
            </HeroTitle>
            <HeroSubtitle variant="h5" align="center" paragraph>
              Transformando ideias em realidade. Conectando pessoas, inovação e sucesso.
            </HeroSubtitle>
            <HeroButtons>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Saiba Mais
                  </Button>
                </Grid>
                <Grid item>
                  <WhatsAppButton />
                </Grid>
              </Grid>
            </HeroButtons>
          </Container>
        </HeroContent>
        <AboutUs />
        <PortfolioSection />
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  O que oferecemos
                </Typography>
                <Typography variant="body2" paragraph>
                  Oferecemos soluções inovadoras para os desafios do seu negócio. Desde consultoria até
                  desenvolvimento de produtos, estamos aqui para ajudar a impulsionar o seu sucesso.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Por que escolher-nos
                </Typography>
                <Typography variant="body2" paragraph>
                  Com uma equipe apaixonada e dedicada, comprometemo-nos a oferecer excelência em cada
                  projeto. Sua visão é nossa prioridade.
                </Typography>
              </StyledPaper>
            </Grid>
          </Grid>
          <SectionTitle>
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
              Nossos Serviços
            </Typography>
          </SectionTitle>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <StyledCard>
                <CardContentWrapper>
                  <Typography variant="h6" gutterBottom>
                    Landing Pages
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Design atrativo e responsivo para maximizar suas conversões.
                  </Typography>
                </CardContentWrapper>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StyledCard>
                <CardContentWrapper>
                  <Typography variant="h6" gutterBottom>
                    Sites Institucionais
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Soluções profissionais para estabelecer a presença online do seu negócio.
                  </Typography>
                </CardContentWrapper>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StyledCard>
                <CardContentWrapper>
                  <Typography variant="h6" gutterBottom>
                    Lojas Virtuais
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Plataformas e-commerce completas para impulsionar suas vendas online.
                  </Typography>
                </CardContentWrapper>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StyledCard>
                <CardContentWrapper>
                  <Typography variant="h6" gutterBottom>
                    Blogs
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Designs personalizados e otimizados para compartilhar suas ideias e conteúdo.
                  </Typography>
                </CardContentWrapper>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StyledCard>
                <CardContentWrapper>
                  <Typography variant="h6" gutterBottom>
                  Sistemas Personalizados
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Soluções sob medida para atender requisitos específicos do seu negócio.
                  </Typography>
                </CardContentWrapper>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StyledCard>
                <CardContentWrapper>
                  <Typography variant="h6" gutterBottom>
                    Design de UX/UI
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Criamos experiências de usuário envolventes e designs intuitivos para garantir o
                    sucesso do seu produto.
                  </Typography>
                </CardContentWrapper>
              </StyledCard>
            </Grid>
          </Grid>
          <div className='whats-app-container'>
            <WhatsAppButton />
          </div>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};