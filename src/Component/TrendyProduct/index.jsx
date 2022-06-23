
import React from 'react';
import './trendyProduct.css';

import { CartState } from '../../Context/Context';
import Tsection from './Tsection'


const TrendyProduct = () => {
  const {
    state:{products},
    dispatch
  }= CartState();
  const TrendProducts = products.filter(function(item){
    let   productCat="trendy"
    return item.HomeCategory === productCat ;
  })
  


// console.log(sortedProducts);
  return (
    <>
    
      <section class="trending_product">
        <div class="trending_header">
            <h2 className="trending_title">Trendy Products</h2> 
            <p class="little_des">Got world most trendy products at your hand</p>
        </div>
          

           <div class="trending_content">
                {
                  TrendProducts.map((prod)=>(
                    <Tsection prod={prod} key={prod.id} />
                  ))
                }
          </div>
       </section>
    </>
  )
}

export default TrendyProduct;