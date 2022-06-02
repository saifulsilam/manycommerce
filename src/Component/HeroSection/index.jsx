import './HeroSection.css';
import heroimage from '../../images/hero_image.png'
export const HeroSection = ()=>{
    return (
           <>
            {/* Hero Section */}
                <section class="hero">
                    <div class="hero-content">
                        <h1>50% Sale Offer!</h1>
                        <p class="description">Hurry Up.Grab Your favourite product <br/>fast with grete offer... </p>
                        <a href="#" class="btn btn-normal">Shop Now</a>
                    </div>
                    <div class="hero-img">
                        <img src={heroimage} alt=""/>
                    </div>
                </section>
            {/* <!--End Hero Section  --> */}
           </>
    );
}


export const HeroSectionOne = ()=>{
    return (
           <>
            {/* Hero Section */}
                <section class="hero">
                <div class="hero-img">
                        <img src="./images/featured-banner.png" alt=""/>
                    </div>
                    <div class="hero-content">
                        <h1>11..11 Mega Sale!</h1>
                        <p class="description">Hurry Up.Grab Your favourite product <br/>fast with grete offer... </p>
                        <a href="#" class="btn btn-normal">GRAB Now</a>
                    </div>
                    
                </section>
            {/* <!--End Hero Section  --> */}
           </>
    );
}
  