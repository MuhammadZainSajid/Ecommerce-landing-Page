import React, { useState } from "react";
import { links } from "./links";
// import { Search } from './Search';
import './App.css';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sidebar">
            <button onClick={() => setIsOpen(!isOpen)}>
            <span class="material-symbols-outlined">
                menu
            </span>
            </button>

            <nav className={`nav ${isOpen ? "nav-open" : "nav-close"}`}>
                <button onClick={() => setIsOpen(!isOpen)}>
                <span class="material-symbols-outlined">
                    close
                </span>
                </button>
                {/* <div><Search /></div> */}
                <ul>
                    {links.map((link, index) => (
                        <a href={link.URL}>
                            <li key={index}>
                                {link.text}
                            </li>
                        </a>
                    ))}
                </ul>
            </nav>
        </div>
    )
}