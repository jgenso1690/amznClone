import React from 'react';
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/prime/Amazon_DesktopHero-1x3._CB410690616_.jpg" alt=""/>
            
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Backste is empty</h2>
                    <p>
                        You have no item in your basket. To buy one or more items, click "Add to baskte" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2>Your Shopping Basket</h2>
                </div>
            )} 
        
        </div>
    )
}

export default Checkout
