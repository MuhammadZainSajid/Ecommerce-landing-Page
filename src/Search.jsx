import React, { useState } from "react";
import "./App.css";

export const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="search-bar">
            <button onClick={() => setIsOpen(!isOpen)}>
                <span class="material-symbols-outlined">
                    search
                </span>
            </button>
            <div className={`search ${isOpen ? "search-open" : "search-close"}`}>
                <input type="text" placeholder="  Search" />
            </div>
        </div>
    )
}