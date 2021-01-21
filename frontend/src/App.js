import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import PlayerScreen from './screens/PlayerScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

function App() {

  return (

    <BrowserRouter>

    <div classNameName="grid-container">

      <header className="row">

        <div>
          <a className="brand" href="auction">Auction Portal</a>
        </div>

        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign-In</a>
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
