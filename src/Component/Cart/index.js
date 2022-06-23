
import {CartState} from '../../Context/Context'
import './Cart.css'
import { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

const Cart = () => {
    const{
        state:{cart},
        dispatch
    } = CartState();
  const [total, setTotal] = useState();

  useEffect(()=>{
      setTotal(
          cart.reduce((acc, curr)=> acc + Number(curr.price)*curr.qty,0)
      );
  },[cart]);
  let cat= cart;
  let CartLength= cart.length;

  if(CartLength!=0){
      return(
        <div className='cart'>
        <h1> Welcome to CartPage</h1>
        <h3> Continue Shopping: <NavLink to="/product"  className="go-back">Go Back</NavLink></h3>
      
    <div class="cart_line">
      <section class="cart-item">
          <table class="cart-page">
              <tr>
                  <td>Product Image</td>
                  <td>Name</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
              </tr>
              {
                  cart.map((item)=>(
                      <tr>
                          <td>
                              <img src={item.image} alt="" />
                          </td>
                          <td>
                              <h4>{item.name}</h4>  
                              <br/>
                              <button onClick={()=>dispatch({type: "REMOVE_FROM_CART",payload: item,})}>Remove</button>
                          </td>
                          <td><input type="number" id='qtys' value={item.qty} onChange={(e)=>dispatch({type:"CHANGE_CART_QTY",payload:{id:item.id,qty:e.target.value,}})}/></td>
                          <td>
                              {item.price}
                          </td>
                          
                      </tr>
                  ))
              }

          </table>
              
      </section>

      <div class="cart-sum">
          <div class="sum-div">
              <table class="cart-price">
                  <tr>
                      <td colspan="2">Subtotal</td>
                      <td>${total}</td>
                  </tr>
                  <tr>
                      <td colspan="2">Tax</td>
                      <td>$50.00</td>
                  </tr>
                  <tr>
                      <td colspan="2">Total Price</td>
                      <td>$50.00</td>
                  </tr>
              </table>
              <button><Link to="../checkout" > Proceed to Checkout</Link></button>
          </div>
      </div>

  </div>
  </div>
      );
  } 
    else{
  return (
      
      <div className='cart'>
          <h1> Welcome to CartPage</h1>
          <h3> Continue Shopping: <NavLink to="/product">Go Back</NavLink></h3>
        
      <div class="cart_line">
        
  <h1> There is nothing to show</h1>

    </div>
    </div>
  )
    }
}

export default Cart