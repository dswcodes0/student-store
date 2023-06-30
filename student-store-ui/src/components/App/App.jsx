import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./App.css";
import AboutMe from "./AboutMe/AboutMe";
import ContactUs from "../Contact Us/ContactUs";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar"

export default function App() {


  const [cartItems, setCartItems] = useState({})

  const handleIncrement = (product) => {
    setCartItems((prevCartItems) => {
      if (product.id in cartItems) {
        return { ...prevCartItems, [product.id] : {...prevCartItems[product.id], quantity: prevCartItems[product.id].quantity + 1} }
      }
      else {
        return { ...prevCartItems, [product.id] : {...product, quantity: 1}}
      }
    });
  };

  const handleDecrement = (product) => {
    setCartItems((prevCartItems) => {
      if (prevCartItems[product.id].quantity > 0) {
        return { ...prevCartItems, [product.id] : {...prevCartItems[product.id], quantity: prevCartItems[product.id].quantity - 1} }
      }
      return prevCartItems;
    });
  };


  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar cartItems={ cartItems }/>
      </div>
      <div className="main">
      <BrowserRouter>
        <Navbar /> 
        <Hero />
        <Routes>
          <Route exact path="/" element={<Home cartItems={cartItems} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
        <AboutMe/>
        <ContactUs/>
        <Footer/>
      </BrowserRouter>
      </div>
    </div>
  );
}
