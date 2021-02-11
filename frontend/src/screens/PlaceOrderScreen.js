import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen(props) {

    const cart = useSelector((state) => state.cart);

    if (!cart.paymentMethod) {
        props.history.push('/payment');
    }

    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12

    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.sellPrice, 0)
    );

    const placeOrderHandler = () => {
        // TODO: dispatch place order action
    };

    return (

        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
        
                    <li>
                        <div className="card card-body">
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                                <strong>Address: </strong> {cart.shippingAddress.address},
                                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                                ,{cart.shippingAddress.country}
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="card card-body">
                            <h2>Payment</h2>
                            <p>
                                <strong>Method:</strong> {cart.paymentMethod}
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="card card-body">
                            <h2>Order Items</h2>
                            <ul>
                                {cart.cartItems.map((item) => (
                                    <li key={item.player}>
                                        <div className="row">
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="small"
                                                ></img>
                                            </div>

                                            <div className="min-30">
                                                <Link to={`/player/${item.player}`}>
                                                    {item.name}
                                                </Link>
                                            </div>

                                            <div>
                                                Auctioned Price = Rs. {item.sellPrice} Crores
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
                </div>

                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="row">
                                <div>Players</div>
                                <div>{cart.cartItems.length}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                <div>Total Amount</div>
                                <div>{cart.itemsPrice} Crores</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                <div>Purse Remaining(after buy)</div>
                                <div>{ 80 - cart.itemsPrice } Crores</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                <div>
                                    <strong> Order Total</strong>
                                </div>
                                <div>
                                    <strong>Rs. {cart.itemsPrice} Crores</strong>
                                </div>
                                </div>
                            </li>
                            <li>
                                <button
                                type="button"
                                onClick={placeOrderHandler}
                                className="primary block"
                                disabled={cart.cartItems.length === 0}
                                >
                                Place Order
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}