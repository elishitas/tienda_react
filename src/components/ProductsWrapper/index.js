import React from 'react'
import { PublicationsContext } from '../../context/PublicationsContext'
import { getPublicationsFromParams } from '../../utils/servicies/getPublicationsFromParams'
import ProductBox from '../ProductBox'

class ProductsWrapper extends React.Component {
  componentDidMount() {
    getPublicationsFromParams(this.props.params, this.context);
  }
  
  componentDidUpdate(prevProps) {    
    if(this.props.params !== prevProps.params){
      getPublicationsFromParams(this.props.params, this.context);
    }
  }
  
  render() {
    return (
      <section>
      {
        this.context.publications.map(product => <ProductBox key={product.id} product={product} />)
      }
      </section>
      )
    }    
  };
  
  ProductsWrapper.contextType = PublicationsContext;
  
  export default ProductsWrapper;