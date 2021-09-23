import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomeScreen from "./screens/homeScreen";
import ProductScreen from "./screens/productScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              EaseMyCart
            </a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign in</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
