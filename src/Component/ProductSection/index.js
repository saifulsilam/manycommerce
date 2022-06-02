import React from 'react';
import { CartState } from '../../Context/Context';


const ProductSection = ({prod}) => {
  

  return (
    <div>
      <h1>Sector</h1>
      <h2>{prod.name}</h2>
    </div>
  )
}

export default ProductSection