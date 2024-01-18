import './index.css';

interface IProps {
  productName: string;
  oldPrice: number;
  newPrice: number;
  discountPercentage: number;
  installments: number;
  installmentPrice: number;
  image: string;
}

export default function ProductCard(props: IProps){
    const {
        productName,
        oldPrice,
        newPrice,
        discountPercentage,
        installments,
        installmentPrice,
        image,
    } = props;

    return(
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt="" />
            </div>
            <div className="product-info">
                <h2 className="product-title">{productName}</h2>
                <div className="price-section">
                <span className="old-price">R${oldPrice.toFixed(2)}</span>
                <span className="new-price">R${newPrice.toFixed(2)}</span>
                <span className="discount">{discountPercentage}% OFF</span>
                </div>
                <div className="installment-section">
                em 10x R${installmentPrice.toFixed(2)} sem juros
                </div>
            </div>
        </div>
    );
}

