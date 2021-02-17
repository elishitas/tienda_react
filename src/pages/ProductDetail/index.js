import axios from 'axios';
import React from 'react';
import { GET_ITEM_BY_ID } from '../../utils/constants/endpoints';
import ProductDetailBox from '../../components/ProductDetailBox';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    axios(`${GET_ITEM_BY_ID}${this.props.match.params.itemId}`)
      .then(res => this.setState({product: res.data}))
      .catch(err => console.error(err))
  }

  render() {
    return(
      <ProductDetailBox props={this.props} product={this.state.product} />
    );
  };
};

export default ProductDetail;