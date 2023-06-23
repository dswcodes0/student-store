import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./App.css";
import AboutMe from "./AboutMe/AboutMe";
import ContactUs from "../Contact Us/ContactUs";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar /> 
        <Hero />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
        <AboutMe/>
        <ContactUs/>
        <Footer/>

      </BrowserRouter>
    </div>
  );
}
