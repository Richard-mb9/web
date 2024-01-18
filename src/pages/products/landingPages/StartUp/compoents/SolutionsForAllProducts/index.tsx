import React from 'react';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import OpenInBrowserOutlinedIcon from '@mui/icons-material/OpenInBrowserOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

import Image from '../../../../../../static/imagesClone/stock_happy_515x515.png';
import './index.css';
import ServiceCard from '../ServiceCard';

export default function SolutionsForAllProducts(){
    return (
        <>
            <div className='solutions-for-all-products-container'>
                <div className='content'>
                    <h1>Soluções Sob Medida para Todos os Segmentos Digitais</h1>
                    <p>Esteja você criando um serviço de assinatura, um mercado sob demanda, uma loja de comércio eletrônico ou uma vitrine de portfólio, Sua Page ajuda você a criar o melhor produto possível para seus usuários.</p>
                </div>
                <img src={Image} alt="solutions" />
            </div>
            <div className='services-cards'>
                <ServiceCard
                    ico={<WebOutlinedIcon  sx={{color: "white"}}/>}
                    textTitle='Landing Pages'
                    textContent='Design atrativo e responsivo para maximizar suas conversões.'
                />
                <ServiceCard
                    ico={<OpenInBrowserOutlinedIcon  sx={{color: "white"}}/>}
                    textTitle='Sites Institucionais'
                    textContent='Soluções profissionais para estabelecer a presença online do seu negócio.'
                />
                <ServiceCard
                    ico={<StoreOutlinedIcon  sx={{color: "white"}}/>}
                    textTitle='Lojas Virtuais'
                    textContent='Plataformas e-commerce completas para impulsionar suas vendas online.'
                />
                <ServiceCard
                    ico={<RssFeedOutlinedIcon  sx={{color: "white"}}/>}
                    textTitle='Blogs'
                    textContent='Designs personalizados e otimizados para compartilhar suas ideias e conteúdo.'
                />
                <ServiceCard
                    ico={<SettingsSuggestOutlinedIcon  sx={{color: "white"}}/>}
                    textTitle='Sistemas Personalizados'
                    textContent='Soluções sob medida para atender requisitos específicos do seu negócio.'
                />
                <ServiceCard
                    ico={<GridViewOutlinedIcon  sx={{color: "white"}}/>}
                    textTitle='Design de UX/UI'
                    textContent='Criamos experiências de usuário envolventes e designs intuitivos para garantir o sucesso do seu produto.'
                />
            </div>
        </>
        
    )
}