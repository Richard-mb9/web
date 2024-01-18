import './index.css';

import Image from '../../../../../../static/imagesClone/img33.png';
import { Button } from '@mui/material';

export default function ProductOffer(){
    return (
        <div className='product-offer-container'>
            <div className='text-content'>
                <h1>Experimente sua música como nunca antes.</h1>
                <p>Experimente a excelência sonora com os fones de ouvido de nossa loja - qualidade superior para uma experiência auditiva inigualável!</p>
                <Button variant='contained' sx={{padding: "15px 20px", alignSelf: 'flex-start'}}>Ver Oferta</Button>
            </div>
            <img src={Image} alt="" />
        </div>
    )
}