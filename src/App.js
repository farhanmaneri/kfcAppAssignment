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
    const index = cartItems.findIndex((p)=> p.id === item.id);
    if(index === -1){
      cartItems.push({ id:item.id, title:item.title, price:item.price, image:item.image,  qty:1,  total: item.price
      })
    }else{
      cartItems[index].qty++;
       cartItems[index].total=cartItems[index].price*cartItems[index].qty
    }
    setCartIems([...cartItems]);
  
    console.log(cartItems)
    console.log(item)
  }
  

  return (
    <>
    <div className='container-fluid bg-dark'>
      <CartViewOffCanvas cartItems={cartItems}/>
      <BuckatOffCanvas selectedItem={selectedItem} addToCart={addToCart} />
      <Header cartCounter={cartItems.length} />  
      <MenuPage handleCardClick={handleCardClick}  />
      <Footer />
      </div>
    </>
  );
}
