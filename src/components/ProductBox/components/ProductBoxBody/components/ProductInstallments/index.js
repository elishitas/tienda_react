import React from 'react'

const ProductInstallments = ({ installments }) => {
  return (
    <div>
      <span className='installments'>Hasta {installments.quantity} cuotas sin interés</span>
    </div>
  );
};

export default ProductInstallments;