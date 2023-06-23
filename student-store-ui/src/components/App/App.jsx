import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
