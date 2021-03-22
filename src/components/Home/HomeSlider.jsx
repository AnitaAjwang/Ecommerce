import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {SliderItems} from './SliderItems';

const HomeSlider = () => {
    const options = {
        margin: 30,
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
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
    
            }
        },
    };
    return (
        <section id="home-slider" >
            <OwlCarousel className="owl-carousel owl-theme" {...options} >
                {SliderItems.map(({id,img,title})=>(
                    <img key={id} src={img} alt={title} className="home-slider-img"/>
                ))}
            </OwlCarousel>
        </section>
    )
}

export default HomeSlider;
