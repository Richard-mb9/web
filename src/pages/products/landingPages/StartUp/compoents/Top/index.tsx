import React from 'react';
import {Button,} from '@mui/material';
import ImagesComponent from '../ImagesComponent';

import './index.css';

export default function Top(){
    return (
        <div className='top'>
            <div className='top-feature'>
                <h1>Transforme suas ideias em sucesso.</h1>
                <h2>
                    Sua Page fará com que seu produto pareça moderno e profissional, economizando um tempo precioso.
                </h2>
                <div className='feature-buttons' style={{justifyContent: "left"}}>
                    <Button variant="contained" color="primary" style={{margin: "10px 10px 10px 0"}}>
                        Saiba Mais
                    </Button>
                    <Button variant="outlined" color="primary" style={{margin: "10px 10px 10px 0"}}>
                        DOCUMENTAÇÃO
                    </Button>
                </div>
            </div>
            <ImagesComponent />
        </div>
    )
}