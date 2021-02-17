import React from 'react'
import { Link } from 'react-router-dom'
import { ITEM_ROUTE } from '../../utils/constants/routes'
import ProductBoxBody from './components/ProductBoxBody'
import ProductBoxImg from './components/ProductBoxImg'

const ProductBox = ( { product } ) => {
  return (    
    <article>
      <Link to={`${ITEM_ROUTE}${product.id}`}>
        <div>
          <ProductBoxImg photo={product.thumbnail} />    
          <ProductBoxBody product={product}/>
        </div>
      </Link>
    </article>
  )
}

export default ProductBox;