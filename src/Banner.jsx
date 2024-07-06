import React from 'react';
import main from './imgs/main.jpg';
import './App.css';

export const Banner = () => {

    return (
        <div className="image-conatiner">
          <img src={main} alt="main" className='main-img' />
          <div className="overlay">
            <p className='img-text'>New Arrivals</p>
            <button>Shop Now</button>
          </div>
        </div>
    )
}