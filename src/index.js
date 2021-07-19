import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navigation from "./tools/Navigation";
/* pages imort */
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Men from "./pages/Shop/Men";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/Product/AddProduct";
import EditProduct from "./pages/Product/EditProduct";
import Cart from "./pages/Cart/Cart";
import Whishlist from "./pages/Whishlist/Whishlist";
import Purchase from "./pages/Purchase/Purchase";
import NotFound from "./pages/NotFound/Notfound";
import Women from "./pages/Shop/Women";

ReactDOM.render(
  <Router>
    <div>
      <Navigation />
    </div>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      {/* product routes */}
      <Route exact path="/product" component={Product}></Route>
      <Route exact path="/product/add" component={AddProduct}></Route>
      <Route exact path="/product/edit/:id" component={EditProduct}></Route>
      {/* categories */}
      <Route exact path="/men" component={Men}></Route>
      <Route exact path="/women" component={Women}></Route>
      {/* logged user pages */}
      <Route exact path="/cart/:id" component={Cart}></Route>
      <Route exact path="/whishlist/:id" component={Whishlist}></Route>
      <Route exact path="/purchase/:id" component={Purchase}></Route>
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
