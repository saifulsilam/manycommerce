import React from 'react';
import { CartState } from '../../Context/Context';


const ProductSection = ({prod}) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div class="trend_col">
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
                {prod.fastDelivery ? (
                    <div>Fast Delivery</div>
                  ) : (
                    <div>4 days delivery</div>
                  )
                }
                {cart.some((p) => p.id === prod.id) ? (
                <button
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

export default ProductSection