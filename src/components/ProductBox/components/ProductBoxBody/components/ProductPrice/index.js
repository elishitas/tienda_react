import React from 'react'

class ProductPrice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: this.props.price,
      prevPrice: this.props.prevPrice,
      percentage: null
    }
  }

  componentDidMount() {
    if(this.state.prevPrice) {
      const percentage = parseInt(100 - ((this.state.price / this.state.prevPrice) * 100));
      this.setState({percentage: percentage});
    }
  }

  render() {
    return (
      <div className='price-div'>
        <span className='product-price'>${this.state.price}</span>
        { this.state.percentage && <span className='discount'>{this.state.percentage}% OFF</span>}
      </div>
    );
  }
};

export default ProductPrice;