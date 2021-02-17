import React from 'react'

const ProductPrevPrice = ({ prevPrice }) => {
  return (
    <div>
      <span className='prev-price'>${prevPrice}</span>
    </div>
  );
};

export default ProductPrevPrice;