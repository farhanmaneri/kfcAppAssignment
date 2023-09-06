import React, { useState } from 'react'
import Header from './components/Header'
import MenuPage from "./pages/MenuPage";
import CartViewOffCanvas from './components/CartViewOffCanvas';
import Footer from './components/Footer';
import BuckatOffCanvas from './components/BuckatOffCanvas';
 

export default function App() {
  const [cartItems, setCartIems] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleCardClick = (item) => {
    console.log(item)
    setSelectedItem([item]);
  };

  // const handleCloseOffcanvas = () => {
  //   setSelectedItem(null);
  // };
  const addToCart = (item) => {
    console.log(item);
    setCartIems([...cartItems, item]);
  }

  return (
    <>
      <CartViewOffCanvas cartItems={cartItems}/>
      <BuckatOffCanvas selectedItem={selectedItem} addToCart={addToCart} />
      <Header cartCounter={cartItems.length}/>  
      <MenuPage handleCardClick={handleCardClick}  />
      <Footer />

    </>
  );
}
