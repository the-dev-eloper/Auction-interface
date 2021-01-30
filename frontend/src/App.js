import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import PlayerScreen from './screens/PlayerScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (

    <BrowserRouter>

    <div classNameName="grid-container">

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
          <Link href="/signin">Sign-In</Link>
        </div>
      </header>

      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/player/:id" component={PlayerScreen} />
        <Route path="/" component={HomeScreen} exact />
      </main>

      <footer classNameName="row center">
        All Rights Reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
