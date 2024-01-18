import ProductCard from '../ProductCard'
import './index.css'

import MusicPlayerImage from '../../../../../../static/imagesClone/img37.png';
import HeadphonesImage from '../../../../../../static/imagesClone/img38.png';
import WirelessHeadpohonesImage from '../../../../../../static/imagesClone/img39.png';
import BluetoothHeadphonesImage from '../../../../../../static/imagesClone/img40.png';
import HeadphonesImage2 from '../../../../../../static/imagesClone/img41.png';
import MusicPlayerImage2 from '../../../../../../static/imagesClone/img42.png';

const products = [
    {name: "Caixa de Musica", oldPrice: 1599, newPrice: 1398, discountPercentage: 12, installments: 10, installmentPrice: 139.80, image: MusicPlayerImage},
    {name: "Headphones", oldPrice: 500, newPrice: 450, discountPercentage: 10, installments: 10, installmentPrice: 45.00, image: HeadphonesImage},
    {name: "Fones sem fio", oldPrice: 280, newPrice: 238, discountPercentage: 15, installments: 10, installmentPrice: 23.80, image: WirelessHeadpohonesImage},
    {name: "Fones de ouvido bluetooth", oldPrice: 300, newPrice: 270, discountPercentage: 10, installments: 10, installmentPrice: 27.00, image: BluetoothHeadphonesImage},
    {name: "Headphones", oldPrice: 700, newPrice: 630, discountPercentage: 10, installments: 10, installmentPrice: 63.00, image: HeadphonesImage2},
    {name: "Caixa de Musica", oldPrice: 340, newPrice: 299.20, discountPercentage: 12, installments: 10, installmentPrice: 29.92, image: MusicPlayerImage2},
    {name: "Headphones", oldPrice: 500, newPrice: 450, discountPercentage: 10, installments: 10, installmentPrice: 45.00, image: HeadphonesImage},
    {name: "Fones sem fio", oldPrice: 280, newPrice: 238, discountPercentage: 15, installments: 10, installmentPrice: 23.80, image: WirelessHeadpohonesImage},
]

export default function FeaturedProducts(){
    return(
        <div className='featured-products-container'>
            <h1>Produtos em destaque</h1>
            <h2>Experimente sua música como nunca antes. Compre instrumentos musicais & acessórios online.</h2>
            <div className='products-container'>
                {products.map((item)=>(
                    <ProductCard
                        image={item.image}
                        productName={item.name}
                        oldPrice={item.oldPrice}
                        newPrice={item.newPrice}
                        discountPercentage={item.discountPercentage}
                        installments={item.installments}
                        installmentPrice={item.installmentPrice}
                    />
                ))}
                
            </div>
        
        </div>
    )
}