import './index.css';
import Image from '../../../../../../static/imagesClone/img34.png';
import { Button } from '@mui/material';

export default function StoreOfferTop(){
    return(
        <div className="store-offer-top-container">
            <div className="text-content">
                <h1>Experimente sua música como nunca antes.</h1>
                <p>Oferta até final de junho. Todos os fones de ouvido originais no máximo:</p>
                <span className='price'>R$299,99</span>
                <Button variant='contained' color='primary' sx={{padding: "15px", width: '150px', margin: '10px 0'}}>Ver Oferta</Button>
                <span className='toast'>Vale-presente Apple Music de R$ 60 na compra de produtos Beats selecionados.</span>
            </div>
            <img src={Image} alt="Phone" />
        </div>
    )
}