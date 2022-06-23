import React from 'react'
import { CartState } from '../../Context/Context'
import {Form, Button } from 'react-bootstrap';
import './Checkout.css'
import {Link} from 'react-router-dom'
import { FaLock } from 'react-icons/fa';



const Checkout = () => {
   
    const{
        state:{cart}
    }=CartState();
   let checkoutProduct=[];
   checkoutProduct=cart;
   let subtotal=0;
    let shipping=35;
 

   const listItem = checkoutProduct.map((item)=>{
         subtotal = subtotal+item.price*item.qty
     return(
      <>
         <div className="select_items">
           <img src={item.image}alt="" />
           <h4>{item.name}</h4>
           <p>{item.qty}</p>
           <p>$ {item.price*item.qty}</p>
        </div>
        <hr/>
        
      </>
     )
   })
   let total= subtotal+shipping; 
  return (
    <>
     <section className='checkout_page'>
     <section class="registration_form">
        <div class="form-title">
            <h1>ADDRESS INFORMATION</h1>
        </div>
        <div class="info">
                <p>If you already have an account Please : <Link to="/signin" className='link'>Sign In</Link></p>
        </div>
        <form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name ..."/>

            <label for="fname">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email.."/>
            <label for="lname">Full Address</label>
            <input type="text" id="lname" name="fullAddress" placeholder="Your Full Address ..."/>

            <label for="country">country</label>
            <select id="country" name="country">
                <option value="autralia">Australia</option>
                <option value="canada">Canada</option>
                <option value="Bangladesh">Bangladesh</option>
            </select>
            <div class="account-type">
                <label for="lname" className='agreement'>Do you agree with  our terms & policy? </label>
                <input type="radio" value="none" id="radioOne" name="account" checked/>
                <label for="radioOne" class="radio">Yes</label>
                <input type="radio" value="none" id="radioTwo" name="account" />
                <label for="radioTwo" class="radio">No</label>
              </div>
        </form>
       </section>

       <section class="registration_form">
        <div class="cart_detail">
            <h4><FaLock className='security'/> All payments are secured and risk free</h4>
        </div>
        <div class="checkout_heading">
          <h3>YOUR ORDER   <span><Link to="/cart" className='linkOne'>EDIT SHOPPING BAG</Link></span></h3>
        </div>
        <hr/>
           {listItem}
        <div className="amount">
          <p>Subtotal</p>
          <p>{subtotal}</p>
        </div>
        <div className="amount">
          <p>Shipping</p>
          <p>{shipping}</p>
        </div>
        <div className="amount">
          <p>total</p>
          <p>{total}</p>
        </div>
       </section>
     </section>
    

    </>
    
  )
}

export default Checkout