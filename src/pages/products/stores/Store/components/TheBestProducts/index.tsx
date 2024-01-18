import './index.css'
import Image1 from '../../../../../../static/imagesClone/img35.png';
import Image2 from '../../../../../../static/imagesClone/img36.png';

export default function TheBestProducts(){
    return(
        <div className='the-best-products-container'>
            <div className='img-content' style={{justifyContent: 'left'}}>
                <img src={Image1} alt="Headset" />
            </div>
            
            <div className='text-content'>
                <h1>Os Melhores Produtos</h1>
                <p>Nos orgulhamos em oferecer uma coleção cuidadosamente selecionada dos melhores produtos do mercado, garantindo que cada escolha que você faz aqui é a melhor. </p>
            </div>
            <div className='img-content' style={{justifyContent: "right"}}>
                <img src={Image2} alt="" />
            </div>
        </div>
    )
}