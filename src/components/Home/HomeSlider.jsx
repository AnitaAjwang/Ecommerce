import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider4 from '../../assets/images/slider4.jpg';
import slider5 from '../../assets/images/slider5.jpg';
import slider6 from '../../assets/images/slider6.jpg';
import slider7 from '../../assets/images/slider7.jpg';
import slider8 from '../../assets/images/slider8.jpg';
import slider9 from '../../assets/images/slider9.jpg';


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
                <img src={slider1} alt=""/>
                <img src={slider4} alt=""/>
                <img src={slider5} alt=""/>
                <img src={slider6} alt=""/>
                <img src={slider2} alt=""/>
                <img src={slider7} alt=""/>
                <img src={slider8} alt=""/>
                <img src={slider9} alt=""/>
            </OwlCarousel>
        </section>
    )
}

export default HomeSlider;
