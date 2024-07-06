import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mensProducts } from './product';
import './App.css';

export const Mens = () => {

    const CustomPrevArrow = (props) => (
        <div
            className="custom-prev-arrow"
            onClick={props.onClick}
            style={{
                color: '#f4ebd9',
                backgroundColor: '#d6ad60',
                borderRadius: '50%',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '50%',
                left: '20px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                zIndex: '1',
            }}
        >
        <span class="material-symbols-outlined">arrow_back_ios_new</span>
        </div>
    );
  
    const NextArrow = (props) => (
        <div
            className="custom-next-arrow"
            onClick={props.onClick}
            style={{
                color: '#f4ebd9',
                backgroundColor: '#d6ad60',
                borderRadius: '50%',
                padding: '8px',
                display: 'flex', // Center icon vertically and horizontally
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '50%',
                right: '20px', // Adjust the positioning from the right
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                // Other styling properties
            }}
        >
        <span class="material-symbols-outlined">arrow_forward_ios</span>
        </div>
    );
  

    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Looping effect
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll per action
        nextArrow: <NextArrow />, // Next arrow icon
        prevArrow: <CustomPrevArrow />, // Previous arrow icon
    };

    // Function to generate individual product slide
    const generateProductSlide = (mensProducts) => (
        <div className="product-slide" key={mensProducts.title}>
            <div className="product-image">
                <div className="product-details">
                    <h3>{mensProducts.title}</h3>
                    <p>{mensProducts.description}</p>
                    <p>{mensProducts.price}</p>
                    <button>View Details</button>
                </div>
                <img className='image' src={mensProducts.imageSrc} alt={mensProducts.title} />
            </div>
        </div>
    );

  return (
    <div className="slider-container">
      <h2>Mens</h2>
      <Slider {...settings}>
        {mensProducts.map((mensProducts) => generateProductSlide(mensProducts))}
      </Slider>
    </div>
  );
}