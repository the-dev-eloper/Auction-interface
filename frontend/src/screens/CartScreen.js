import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox'

function CartScreen(props) {

    const playerId = props.match.params.id
    const sellPrice = props.location.search ? Number(props.location.search.split('=')[1]) : 1

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const dispatch = useDispatch();

    useEffect(() => {
        if(playerId) {
            dispatch(addToCart(playerId, sellPrice));
        }
    },[dispatch, playerId, sellPrice])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };

    return (

        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <MessageBox>
                        Cart is empty. <Link to="/">Go Shopping</Link>
                    </MessageBox>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
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
                                        <Link to={`/player/${item.player}`}>{item.name}</Link>
                                    </div>

                                    <div>
                                        <label>Auctioned Price</label>
                                        <input
                                            type="number"
                                            value={item.sellPrice}
                                            onChang={(e)  =>
                                                dispatch(
                                                    addToCart(item.player, Number(e.target.value))
                                                )
                                            }
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCartHandler(item.player)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.length} Players) :
                                Rs. {cartItems.reduce((a, c) => a + c.sellPrice , 0)} Crores
                            </h2>
                        </li>

                        <li>
                            <button
                                type="button"
                                onClick={checkoutHandler}
                                className="primary block"
                                disabled={cartItems.length === 0}
                            >
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CartScreen