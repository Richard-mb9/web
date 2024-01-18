import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Produto 1',
    description: 'Descrição do Produto 1',
    price: 99.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Produto 2',
    description: 'Descrição do Produto 2',
    price: 199.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Adicione mais produtos conforme necessário
];

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {products.map((product) => (
        <Card key={product.id} style={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={product.imageUrl}
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {`R$${product.price}`}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
