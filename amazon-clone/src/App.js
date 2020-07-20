import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from './Checkout.js'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header />
          <Checkout />
            <h1>CHECKOUT</h1>
          </Route>
          <Route path="/login">
            <h1>LOGIN</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
