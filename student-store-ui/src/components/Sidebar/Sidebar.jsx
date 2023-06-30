//create a left nav bar with 2 buttons,a shopping cart and a expand
//the left navbar will be collapsed until the user hits the expand button
//when the user clicks expand a larger navbar appears 
// display a table of prpducts
import React, { useState } from "react";
import "./Sidebar.css";


export default function Sidebar({cartItems}) {
    const handleMenuClick = () => {
        setIsExpanded(!isExpanded)
        setIsHidden(!isHidden)
    }
    const [isHidden, setIsHidden] = useState(true)
    const [isExpanded, setIsExpanded] = useState(false)
    console.log(cartItems)
    let totalPriceSum = 0
    return (
        <div className={`sidebar-page ${isExpanded ? 'expanded' : ''}`}>

        <div className="cart">
            <button onClick={handleMenuClick} className="menu"><i className="fa-solid fa-bars"></i></button>
            <div className={`main ${isHidden ? 'hidden' : ''}`}>
            <h3>Shopping cart</h3>
            <div className="cart-info">
                <ul>
                    <li className="cart-details-header">Name</li>
                    <li className="cart-details-header">Quantity</li>
                    <li className="cart-details-header">Unit Price</li>
                    <li className="cart-details-header">Cost</li>
                </ul>
                
                {
                    
                    cartItems && 
                    Object.entries(cartItems).map( ([productId, productInfo]) => {
                        const totalPrice = productInfo.price * productInfo.quantity
                        totalPriceSum += totalPrice

                        return (
                            <ul key={productId}>
                                <li className="cart-details-body">{productInfo.name}</li>
                                <li className="cart-details-body">{productInfo.quantity}</li>
                                <li className="cart-details-body">{productInfo.price}</li>
                                <li className="cart-details-body">{(totalPrice).toFixed(2)}</li>
                            </ul>
                        )
                    })
                }
            </div>
            {

            <div className="cart-total">
                <div className="subtotal-row">
                    <div className="subtotal">Subtotal:</div>
                    <div className="subtotal-price">{(totalPriceSum).toFixed(2)}</div>
                </div>
                <div className="taxes-fees-row">
                    
                    <div className="taxes-fees">Taxes and Fees</div>
                    <div className="taxes-fees-price">{(totalPriceSum * 0.07).toFixed(2)}</div>
                </div>
                <div className="total-row">
                    <div className="total">Total: </div>
                    <div className="total-price">{(totalPriceSum * 1.07).toFixed(2)}</div>
                </div>
            </div>
            }
            <div className="payment-info">
            <h3>Payment Info</h3>
            <div className="user-info">
                <form>
                <div className="input-group">
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="input-group">
                    <input type="email" placeholder="Your Email" />
                </div>
                <div className="input-group terms-group">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">I agree to the <a href="https://policies.google.com/terms?hl=en-US">terms and conditions</a></label>
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        </div>

        </div>
        </div>

    )
}