import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { TopNav } from "./TopNav";
import Home from "./Home";
import { About } from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Login from "./Login";
import ProductCard from "./ProductCard";

const MainRoute = () => {
  return (
    <div>
      <Router path="/TopNav">
        <TopNav />
        <Switch>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={ProductCard} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
          </div>
        </Switch>
      </Router>
    </div>
  );
};
export default MainRoute;
