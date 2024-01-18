import React from 'react';
import { useParams } from 'react-router-dom';

const Produto: React.FC = () => {
  let { id } = useParams<{ id: string }>();

  // Aqui você pode buscar os detalhes do produto usando o id

  return <div>Detalhes do produto {id}</div>;
};

export default Produto;
