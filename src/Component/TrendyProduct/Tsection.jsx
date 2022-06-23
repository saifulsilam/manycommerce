import React from 'react';
import { CartState } from '../../Context/Context';

const Tsection=({prod})=>{
  const {
    state: {cart},
    dispatch
  } = CartState();
    return(
        <div class="trending_col" key={prod.id}>
            <div>

              <img src={prod.image} alt=""/>
              <h4>{prod.name}</h4>
            </div>
              
            <div class="trending_attribute">
                <div class="trending_price_tag">
                  <p class="off_price">{prod.currency}{prod.old_price}</p>
                  <p class="on_price">{prod.currency}{prod.price}</p>
                </div>
                <div class="trend_ratings">
                <p class="trend_rating_item">*****</p> 
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