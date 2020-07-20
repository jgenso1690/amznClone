import React from 'react';
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-current-format";


function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/prime/Amazon_DesktopHero-1x3._CB410690616_.jpg" alt=""/>
            
            {basket?.length === 0 ? (
                <div >
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no item in your basket. To buy one or more items, click "Add to baskte" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )} 
            
            </div>
            {basket?.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )
            }
        </div>
    )
}

export default Checkout
