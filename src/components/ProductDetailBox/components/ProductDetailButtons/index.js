import React from 'react';
import './styles/index.css'

const ProductDetailButtons = ({ product, props}) => {
  const goBackHandler = () => props.history.goBack();
  const goBuy = () => window.open(product.permalink)
  return (
    <div className='product-detail-buttons-div'>
      <button onClick={goBackHandler}>Volver</button>
      <button onClick={goBuy}>Comprar</button>
    </div>
  )
}

export default ProductDetailButtons