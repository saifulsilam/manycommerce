
import React from 'react';
 import { CartState } from '../../Context/Context';

export const TopFilter = () => {
  return (
    <div>TopFilter</div>
  )
};

export const Filter = () => {
  const {
    productDispatch,
    productState:{byStock, byFastDelivery, sort}
  } = CartState();
    return (
      <div className='filter'>
          <span className='title'>Filter Products</span>
          <span>
          <form>
               <input type="radio" id="filter" name="decending" onChange={()=>
                productDispatch({
                  type:"SORT_BY_PRICE",
                  payload:"lowToHigh"
                })} 
                checked={sort==="lowToHigh" ? true : false}  
               />
               <label>Ascending</label><br/>
               <input type="radio" id="filter" name="decending" onChange={()=>
                productDispatch({
                  type:"SORT_BY_PRICE",
                  payload:"highToLow"
                })} 
                checked={sort==="highToLow" ? true : false}  
               />
               <label>Decending</label><br/>

               <input type="checkbox" id="filter" name="decending" onChange={()=>
                productDispatch({
                  type:"FILTER_BY_STOCK",
                })} 
                checked={byStock}  
               />
               <label>Include Out of Stock</label><br/>

               <input type="checkbox" id="filter" name="decending" onChange={()=>
                productDispatch({
                  type:"FILTER_BY_DELIVERY",
                })} 
                checked={byFastDelivery}  
               />
               <label>Fast Delivery Only</label><br/>

               <button onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }>CLEAR FILTERS</button>

          
            </form>
          </span>
      </div>
    )
  }


