
import './Navbar.css';
import { FaRegHeart, FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import Logo from '../../images/logo.png';
import { NavLink as NavLink } from 'react-router-dom';
import {CartState} from '../../Context/Context'
const Navbar =()=>{
    const {
        state: { cart },
        dispatch,
        productDispatch,
      } = CartState();
    return (
        <>
                {/* Header Section  */}
   <section class="header">
       <div class="top-navbar">
           <div class="row">
            <div class="col span_1_of_2">
                <ul class="left-top">
                    <li>Region/currency</li>
                    <li>Help</li>
                    <li><i class="fas fa-mobile-alt"></i>123-456-7890</li>
                </ul>
            </div>
            <div class="col span_1_of_2">
                <ul class="right-top">
                    
                    <li><NavLink to ='/wishlist'  className='navLink'><FaRegHeart/> Wishlist</NavLink></li>
                    <li><NavLink to ='/account'  className='navLink'><FaRegUser/> Account</NavLink></li>
                </ul>
            </div>
    
           </div>
    
           </div>

           <hr class="border"/>
           <div class="row main-navbar">
                <div class="col span_1_of_3 logo">
                    <img src={Logo} alt=""/>
                </div>
            <div class="col span_1_of_3 menus">
                <ul class="main-menu">
                    <li><NavLink to ='/'  className='navLink'>Home</NavLink></li>
                    <li><NavLink to ='/pages'  className='navLink'>Pages</NavLink></li>
                    <li><NavLink to ='/blog'  className='navLink'>Blogs</NavLink></li>
                    <li><NavLink to ='/product'  className='navLink'>Products</NavLink></li>
                    <li><NavLink to ='/contact'  className='navLink'>Contact</NavLink></li>
                </ul>
              
            </div>
            <div class="col span_1_of_3 search">
            
            <FaSearch/>Search
             <NavLink to="/cart"  className='navLink'><FaShoppingCart/></NavLink><sup>{cart.length}</sup>
            </div> 
        </div>
   
   </section> 

    {/* End Header Section */}
        </>
    );
}

export default Navbar;