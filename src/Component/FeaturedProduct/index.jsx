
import React from 'react';
import './FeaturedProduct.css';
import { CartState } from '../../Context/Context';
import {NavLink} from 'react-router-dom';

 const FeaturedProduct = () => {
  const {
    state:{products},
  
  }= CartState();
  const FeaturedProduct = products.filter(function(item){
    let productCat="featured"
    return item.HomeCategory === productCat ;
  })

   const listItem = FeaturedProduct.map((item)=>(
    
        <div class="featured_col" key={item.id}> 
          <NavLink to=""><img src={item.image} alt="" /></NavLink>
            <NavLink to="" className="title"><h3 class="title">{item.name}</h3></NavLink>
            
           
        </div>
    ))
  return (
    <>
    
      <section class="featured-product">
        <div class="featured_header">
            <h2 class="featured_title">Featured Products</h2>
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