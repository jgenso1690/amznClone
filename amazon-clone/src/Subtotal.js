import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-current-format";
import { useStateValue } from "./StateProvider";
import {getBasktetTotal } from "./reducer";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
            
            decimalScale={2}
            value={getBasktetTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            
            />
            <button>Proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
