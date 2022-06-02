import {Link} from 'react-router-dom';
import './Footer.css';
const Footer = ()=>{
    return (
        <>
            <section class="footer">
                <div class="row footer_main">
                    <div class="col span_1_of_4">
                        <img src="./images/logo.png" alt=""/>
                        <p>If you are going to use of Lorem Ipsum need 
                        to be sure there isn't hidden of text.</p>
                    </div>
                    <div class="col span_1_of_4 foot-two">
                        <h3>Useful Links</h3>
                            <ul>
                                <li><a href="">About Us</a> </li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Affilitiate</a></li>
                                <li><a href="">Mega Event Sale</a></li> 
                            </ul>
                    </div>
                    <div class="col span_1_of_4 foot-three">
                        <h3>Category</h3>
                        <ul>
                            <li><a href="">Men</a> </li>
                            <li><a href="">Women</a></li>
                            <li><a href="">Baby</a></li>
                            <li><a href="">Electronics</a></li>
                            <li><a href="">Toys</a></li> 
                        </ul>
                    </div>
                    <div class="col span_1_of_4 foot-four">
                        <h3>Contact Info</h3>
                        <ul>
                            <li><Link to="">Men</Link> </li>
                            <li><a href="">Women</a></li>
                            <li><a href="">Baby</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="copyright">
                        <p>@copyright,All Right Serves to Saiful Islam</p>
                    </div>
                </div>
            
            </section>
        </>
    );
}

export default Footer;