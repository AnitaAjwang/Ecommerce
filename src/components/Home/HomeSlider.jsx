import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {SliderItems} from './SliderItems';
import {HeroMessage} from '../../Data/data';


const HomeSlider = () => {
    const {title,description,button,buttonLink} = HeroMessage;
    const options = {
        margin: 0,
        responsiveClass: true,
        nav: false,
        loop:true,
        dots: true,
        autoplay: true,
        autoplayTimeout:3000,
        smartSpeed: 300,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,
    
            }
        },
    };
    return (
        <section id="home-slider" className="ui-pb-50" >
            
             <div className="home-slider-circle"></div>
                <div className="home-slider-info">
               <h2 className="home-slider-title">{title}</h2>
                <p className="home-slider-description">{description}</p> 
                <div className="home-slider-btn">
                    <a href="#" className="home-slider-link">{button}</a>
                </div>                
           </div>
        
           {/* <OwlCarousel className="owl-carousel owl-theme" {...options} >
                {SliderItems.map(({id,img,title})=>(
                        <img key={id} src={img} alt={title} className="home-slider-img"/>    
                ))}
            </OwlCarousel>  */}
         

                

        </section>
    )
}

export default HomeSlider;
