import React, { useState } from 'react'
import Header from './components/Header'
import MenuPage from "./pages/MenuPage";
import CartViewOffCanvas from './components/CartViewOffCanvas';
import Footer from './components/Footer';
import AddToCartOffCanvas from './components/AddToCartOffCanvas';
 

export default function App() {
  const [cartItems, setCartIems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseOffcanvas = () => {
    setSelectedItem(null);
  };
  const addToCart = (item) => {
    console.log(item);
    setCartIems([...cartItems, item]);
  }

  return (
    <>
      <CartViewOffCanvas cartItems={cartItems}/>
      <AddToCartOffCanvas cartItems={cartItems}/>
      <Header cartCounter={cartItems.length}/>  
      <MenuPage handleCardClick={handleCardClick} addToCart={addToCart}/>
      <Footer />

    </>
  );
}
