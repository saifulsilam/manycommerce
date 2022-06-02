import {HeroSection , HeroSectionOne}from "../Component/HeroSection";
import Navbar from "../Component/Navbar";
import  TrendyProduct  from "../Component/TrendyProduct";
import Category from "../Component/CategorySlide";
import CategorySlide from "../Component/CategorySlide";
import FeaturedProduct from "../Component/FeaturedProduct";
import Branding from "../Component/Branding";

const Home = ()=>{
    return (
        <>
            <HeroSection />
            <CategorySlide />
            <TrendyProduct/> 
            <HeroSectionOne />
            <FeaturedProduct />
            <Branding />
            
            {/* <PageLayout /> */}
        </>
    );
}
export default Home ; 