import React from 'react'
import {  Routes,    Route,  } from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import Home from "../pages/Home";
import ProductInfo from '../pages/ProductInfo';
import Login from '../pages/Login';
export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="products/:productId" element={<ProductInfo />} />
      </Routes> 
    </div>
  )
};
