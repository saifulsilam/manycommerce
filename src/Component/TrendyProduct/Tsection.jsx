import React from 'react';
import { CartState } from '../../Context/Context';

const Tsection=({prod})=>{
  const {
    state: {cart},
    dispatch
  } = CartState();
    return(
        <div class="trend_col" key={prod.id}>
            <div>

              <img src={prod.image} alt=""/>
              <h4>{prod.name}</h4>
            </div>
              
            <div class="trendy_attribute">
                <div class="price_tag">
                  <p class="old_price">{prod.currency}{prod.old_price}</p>
                  <p class="current_price">{prod.currency}{prod.price}</p>
                
                </div>
                <div class="trend_foo">
                <p class="ratings">*****</p> 
                </div>
                {cart.some((p) => p.id === prod.id) ?(<><button class="addCart" onClick={() => dispatch({type: "REMOVE_FROM_CART",payload: prod,})}>Remove from Cart </button></>) : (
            <button
            class="addCart"
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
    )
}
export default Tsection;