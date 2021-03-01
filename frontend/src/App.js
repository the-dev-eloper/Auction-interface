import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import PlayerScreen from './screens/PlayerScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { signout } from './actions/userActions';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (

    <BrowserRouter>

    <div className="grid-container">

      <header className="row">

        <div>
          <Link className="brand" to="/">Auction Portal</Link>
        </div>

        <div>
          <Link to="/cart">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      </header>

      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/player/:id" component={PlayerScreen} />
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/order/:id" component={OrderScreen}></Route>
        <Route path="/" component={HomeScreen} exact />
      </main>

      <footer className="row center">
        All Rights Reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
