import React, { useState } from "react";
import './App.css';

export const AccountBox = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accBox">
            <button onClick={() => setIsOpen(!isOpen)}>
            <span class="gg-profile"></span>
            </button>

            <div className={`box ${isOpen ? "box-open" : "box-close"}`}>
                <div className="box-head">
                    <h4>Dashboard</h4>
                    <button onClick={() => setIsOpen(!isOpen)}>
                    <span class="material-symbols-outlined">
                        close
                    </span>
                    </button>
                </div>
                <div className="box-body">
                    <div className="cart">
                        <div className="cart-head">
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <h4>CART</h4>
                        </div>
                        <ul>
                            <li>Order 1</li>
                            <li>Order 2</li>
                        </ul>
                    </div>
                </div>
                <div className="total">Total:</div>
                <button className="checkout">Checkout!</button>
            </div>
        </div>
    )
}