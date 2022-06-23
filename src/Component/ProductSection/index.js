
import React from 'react';
import {Link} from 'react-router-dom'
import { CartState } from '../../Context/Context';


const ProductSection = ({prod}) => {
  
  const {
    state: { cart },
    dispatch,
  } = CartState();
  let ratings="";
  for(let i=0;i<5;i++){
    ratings += "★";
  }
  return (
    <div>
       <div class="trend_col" key={prod.id}>
            <div className='container'>
              <img src={prod.image} alt=""/>
              <div class="top-left"><p class="old_price">{prod.currency}{prod.old_price}</p></div>     
            </div>
            <Link className='productTitle' to={`/singlepost/${prod.id}`}><h4>{prod.name}</h4></Link> 
                         
            <div class="trendy_attribute">
                 {prod.fastDelivery ? (
                      <div className='fast_delivery'>Fast Delivery</div>
                        ) : (
                      <div className='fast_delivery'>4 days delivery</div>
                    )}
                    <p class="rating">{ratings}</p>
                  
                <div class="price_tag">
                  <p>{prod.currency}{prod.price}</p>
                </div>
               
                
                {cart.some((p) => p.id === prod.id) ? (
                    <button
                     className='danger'
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className='addtoCart'
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: prod,
                        })
                      }
                      disabled={!prod.inStock}
                    >
                      {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                    </button>
                  )}
          
                
            </div>
            
        </div>
    </div>
  )
}


export default ProductSection