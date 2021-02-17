import React from 'react';
import ProductFreeShipping from './components/ProductFreeShipping';
import ProductInstallments from './components/ProductInstallments';
import ProductPrevPrice from './components/ProductPrevPrice';
import ProductPrice from './components/ProductPrice';

class ProductBoxBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      price: this.props.product.price,
      title: this.props.product.title,
      installments: this.props.product.installments,
      shipping: this.props.product.shipping,      
      original_price: this.props.product.original_price,      
    }
  }
  
  render() {
    return (
      <div className='product-box-body'>
        { this.state.original_price && <ProductPrevPrice prevPrice={this.state.original_price} />}
        <ProductPrice price={this.state.price} prevPrice={this.state.original_price} />
        { this.state.installments && this.state.installments.rate === 0 && <ProductInstallments installments={this.state.installments} />}
        { this.state.shipping.free_shipping && <ProductFreeShipping />}
        <span className='product-title'>{this.state.title}</span>
      </div>
    );
  }
};

export default ProductBoxBody;