import './Navbar.css';
import { FaRegHeart, FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import Logo from '../../images/logo.png';
import { NavLink as Link, NavLink } from 'react-router-dom';
const Navbar =()=>{
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
                    
                    <li><NavLink to ='/wishlist'  className='navb'><FaRegHeart/> Wishlist</NavLink></li>
                    <li><NavLink to ='/account' ><FaRegUser/> Account</NavLink></li>
                    
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
                    <li><NavLink to ='/' >Home</NavLink></li>
                    <li><NavLink to ='/pages' >Pages</NavLink></li>
                    <li><NavLink to ='/blog' >Blogs</NavLink></li>
                    <li><NavLink to ='/product' >Products</NavLink></li>
                    <li><NavLink to ='/contact' >Contact</NavLink></li>
                </ul>
              
            </div>
            <div class="col span_1_of_3 search">
            
            <FaSearch/>Search
             <FaShoppingCart/><sup>(2)</sup>
            </div> 
        </div>
   
   </section> 

    {/* End Header Section */}
        </>
    );
}
export default Navbar;