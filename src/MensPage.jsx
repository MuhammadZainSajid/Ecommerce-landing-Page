import React from 'react';
import { Sidebar } from './Sidebar';
import { AccountBox } from './Accounts';
import './App.css';
import { MensProducts } from './ProductsGrid';

export const MensPage = () => {
  return (
    <>
      <header className="header">
        <div><Sidebar /></div>
        <p className="title"><a href="/">Zenith</a></p>
        <AccountBox />
      </header>

      <div className="content">
        <MensProducts />
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

