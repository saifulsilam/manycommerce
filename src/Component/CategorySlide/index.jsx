import catItem1 from '../../images/cat_item1.png';
import catItem2 from '../../images/cat_item2.png';
import catItem3 from '../../images/cat_item3.png';
import './CategorySlide.css';
import { FaArrowRight } from "react-icons/fa";
import {NavLink} from 'react-router-dom';

 const CategorySlide= ()=>{
    return (
        <>
        {/* Category Product  */}
    <section class="category-brand">
        <div class="row">
            <div class="col span_1_of_3">
                <NavLink to=""><img src={catItem1} alt=""/></NavLink>
                <NavLink to=""><h3>Branded Chair for Relax...</h3> </NavLink>
                <NavLink to="" className="arrow_text">Explore Now<FaArrowRight className='arrow_right'/></NavLink>
            </div>
            <div class="col span_1_of_3">
                <NavLink to=""><img src={catItem2} alt=""/></NavLink>
                <NavLink to=""><h3>Mini Gossip Table...</h3> </NavLink>
                <NavLink to="" className="arrow_text">Explore Now<FaArrowRight className='arrow_right'/></NavLink>
            </div>
            <div class="col span_1_of_3">
                <NavLink to=""><img src={catItem3} alt=""/></NavLink>
                <NavLink to="" className=""><h3>Automoted Wheel Chair...</h3> </NavLink>
                <NavLink to="" className="arrow_text">Explore Now<FaArrowRight className='arrow_right'/></NavLink>
            </div>
        </div>
    </section>
    {/* Category */}
        </>
    );
}
export default CategorySlide;