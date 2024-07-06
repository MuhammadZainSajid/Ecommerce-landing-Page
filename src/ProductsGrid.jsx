import React from "react";
import { mensProducts } from "./product";

// Function to generate individual product slide
const generateProductCards = (mensProduct) => (
    <div className="product-card" key={mensProduct.title}>
        <div className="product-image">
            <div className="product-details">
                <h3>{mensProduct.title}</h3>
                <p>{mensProduct.description}</p>
                <p>{mensProduct.price}</p>
                <button>View Details</button>
            </div>
            <img src={mensProduct.imageSrc} alt={mensProduct.title} />
        </div>
    </div>
);

export const MensProducts = () => {
    

    return (
        <div className="product-container">
            <h2>Featured Collection</h2>
            {mensProducts.map((mensProducts) => generateProductCards(mensProducts))}
        </div>
    )
}