import React from 'react';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id,title, image, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch ({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

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
                <button onClick={removerFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
