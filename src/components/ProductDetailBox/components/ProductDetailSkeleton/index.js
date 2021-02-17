import React from 'react';
import { Skeleton } from '@material-ui/lab';

const ProductDetailSkeleton = () => {
  return (
    <React.Fragment>
      <figure className='skeleton-img'>
        <Skeleton animation='pulse' variant="rect" width={600} height={460} />
      </figure>
      <div className='skeleton-text'>
        <Skeleton animation='pulse' variant="text" />
        <Skeleton animation='pulse' variant="text" />
        <Skeleton animation='pulse' variant="text" />
        <Skeleton animation='pulse' variant="text" />
        <Skeleton animation='pulse' variant="text" />
        <Skeleton animation='pulse' variant="text" />
      </div>
    </React.Fragment>
  )
}

export default ProductDetailSkeleton;