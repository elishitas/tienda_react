import React from 'react';
import './styles/index.css'
import ProductBoxBody from '../ProductBox/components/ProductBoxBody';
import ProductBoxImg from '../ProductBox/components/ProductBoxImg';
import ProductDetailSkeleton from './components/ProductDetailSkeleton';
import ProductDetailButtons from './components/ProductDetailButtons';
//this!

const ProductDetailBox = ({ product, props }) => {
  return (
    <article className='bg-product-detail-box'>
      {product.pictures ? (
        <React.Fragment>
          <ProductBoxImg photo={product.pictures[0].url} title={product.title} />
          <div>
            <ProductBoxBody product={product} />
            <ProductDetailButtons props={props} product={product} />
          </div>
        </React.Fragment>
      ) : (
        <ProductDetailSkeleton />
      )}      
    </article>
  );
};

export default ProductDetailBox;