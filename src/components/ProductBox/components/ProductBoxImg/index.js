import React from 'react';
import './styles/index.css';

const ProductBoxImg = ({ photo, title }) => {
  return (
    <figure>
      <img src={photo} alt={title} />
    </figure>
  );
};

export default ProductBoxImg;