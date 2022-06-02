import React from 'react';
import './trendyProduct.css';
import Product_card from "./data";


const TrendyProduct = () => {
   
    const listItem = Product_card.map((item)=>( 
        <div class="trend_col" key={item.id}>
            <div>
              <img src={item.thumb} alt=""/>
              <h4>{item.title}</h4>
            </div>
              
            <div class="trendy_attribute">
                <div class="price_tag">
                  <p class="old_price">{item.currency}{item.old_price}</p>
                  <p class="current_price">{item.currency}{item.price}</p>
                
                </div>
                <div class="trend_foo">
                <p class="ratings">*****</p> 
                </div>
                <button type ="button"class="addCart">Add to Cart</button>
                
            </div>
            
        </div>
      
    ))
  return (
    <>
    
      <section class="trendy_product">
        <div class="header">
            <h2 className="sec_title">Trendy Products</h2>
            <p class="little_des">Got world most trendy products at your hand</p>
        </div>
            
           <div class="trendy_content">
              {listItem}
          </div>
       </section>
    </>
  )
}
export default TrendyProduct;