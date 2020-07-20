import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct() {
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__img" src={image} alt ="" />
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>

                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutproduct__rating">
                {
                      Array(rating)
                      .fill()
                      .map((ele, i) => (
                        <p>⭐</p>
                      )) 
                    } 
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
