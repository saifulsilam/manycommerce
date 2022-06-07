
import React from 'react';
import './FeaturedProduct.css';
import Featured_card from "./data";
import { CartState } from '../../Context/Context';

 const FeaturedProduct = () => {
  const {
    state:{products},
  
  }= CartState();
  const FeaturedProduct = products.filter(function(item){
    let productCat="featured"
    return item.HomeCategory === productCat ;
  })
  
  let ratings='****';
   
    const listItem = FeaturedProduct.map((item)=>(
    
        <div class="featured_col" key={item.id}> 
          <img src={item.image} alt="" />
            <h3 class="title">{item.name}</h3>
            <div className='price_tag'>
            <p class="old-price">{item.currency}{item.old_price}</p>
            <p class="price">{item.currency}{item.price}</p> 
            </div>
           
        </div>
    ))
  return (
    <>
    
      <section class="featured-product">
        <div class="header">
            <h2 class="sec_title">Featured Products</h2>
            <p class="little-des">Got world most trendy products at your hand</p>
        </div>
            
           <div class="featured-content">
              {listItem}
          </div>
       </section>
    </>
  )
}

export default FeaturedProduct;