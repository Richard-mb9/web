import React from 'react';

import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';

import './index.css'

export default function MarketingComponent(){
    return(
        <div className='marketing-section'>
            <h1>Construimos seu site com velocidade</h1>
            <h2>Vamos construir pra você um site não apenas bonito e moderno, mas também incrivelmente flexível, garantindo que sua presença online seja tão dinâmica e adaptável quanto o seu negócio merece ser.</h2>
            <div className='items'>
                <div className='item'>
                    <div className='item-ico-container'>
                        <ViewListRoundedIcon  color='primary' fontSize='large'/>
                    </div>
                    <h3 className='item-title'>design Moderno</h3>
                    <p>Comprometemo-nos a entregar um design que transcenda as tendências atuais, oferecendo um visual moderno e refinado que coloca seu negócio à frente no mundo digital.</p>
                </div>
                <div className='item'>
                    <div className='item-ico-container'>
                        <FindInPageOutlinedIcon  color='primary' fontSize='large'/>
                    </div>
                    <h3 className='item-title'>Navegação Intuitiva</h3>
                    <p> Criamos páginas de navegação intuitiva, assegurando uma experiência de usuário fluida e acessível, onde cada elemento é projetado pensando na facilidade e clareza de uso.</p>
                </div>
                <div className='item'>
                    <div className='item-ico-container'>
                        <MobileFriendlyIcon  color='primary' fontSize='large'/>
                    </div>
                    <h3 className='item-title'>Responsividade</h3>
                    <p>Nossos sites são criados com responsividade total, garantindo uma experiência perfeita em todos os dispositivos, desde smartphones a desktops, adaptando-se harmoniosamente a qualquer tamanho de tela.</p>
                </div>
            </div>
        </div>
    )
}