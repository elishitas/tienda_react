//import axios from 'axios'
import React from 'react'
import { PublicationsContext } from '../../context/PublicationsContext'
///import { GET_ITEMS_FOR_HOME_PAGE, GET_ITEMS_BY_CATEGORY_URL, GET_ITEMS_BY_SEARCH_QUERY } from '../../utils/constants/endpoints'
import { getPublicationsFromParams } from '../../utils/services/getPublicationsFromParams'
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