import React from 'react'
import {  Routes,    Route,  } from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import ProductDetail from "../pages/ProductDetail";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menupage" element={<MenuPage/>}/>
        <Route path=":id" element={<ProductDetail/>}/> 
      </Routes> 
    </div>
  )
};
