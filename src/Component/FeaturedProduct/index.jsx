
import React from 'react';
import './FeaturedProduct.css';
import Featured_card from "./data";

 const FeaturedProduct = () => {
  let ratings='****';
   
    const listItem = Featured_card.map((item)=>(
    
        <div class="featured_col" key={item.id}> 
          <img src={item.thumb} alt="" />
            <h3 class="title">{item.title}</h3>
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