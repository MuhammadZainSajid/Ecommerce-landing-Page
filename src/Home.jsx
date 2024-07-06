import React from 'react';
import { Sidebar } from './Sidebar';
import { AccountBox } from './Accounts';
import { Banner } from './Banner';
import { ProductSlider } from './Slider';
import './App.css';

export const Home = () => {
  return (
    <>
      <header className="header">
        <div><Sidebar /></div>
        <p className="title"><a href="/">Zenith</a></p>
        <AccountBox />
      </header>

      <div className="content">
        <Banner />
        <ProductSlider />
        {/* <Mens /> */}
      </div>

      <footer className="footer">
        <div className="footer-links">
          <span><i class="gg-facebook"></i></span>
          <span><i class="gg-instagram"></i></span>
          <span><i class="gg-twitter"></i></span>
        </div>
        <p>© 2023 Zenith. All Rights Reserved</p>
      </footer>
    </>
  )
}

