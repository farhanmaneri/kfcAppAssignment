import React,{useState, useEffect} from 'react'
import Header from "../components/Header";
import MenuPage from "../pages/MenuPage";
import CartViewOffCanvas from "../components/CartViewOffCanvas";
import Footer from "../components/Footer";
import BuckatOffCanvas from "../components/BuckatOffCanvas";
import Swal from "sweetalert2";
import { useSubmit } from 'react-router-dom';

function Home() {
  
      const [cartItems, setCartIems] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  // const [quantity, setQuantity] = useState(1);

  const handleCardClick = (item) => {
    // console.log(item);
    setSelectedItem([item]);
  };

  // const handleCloseOffcanvas = () => {
  //   setSelectedItem(null);
  // };
  const addToCart = (item) => {
    // console.log(item);
    const index = cartItems.findIndex((p) => p.id === item.id);
    if (index === -1) {
      const newItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        qty: 1,
        total: item.price
      }
      // console.log(newItem)
      cartItems.push(newItem
      );
    } else {
      cartItems[index].qty++;
      cartItems[index].total = cartItems[index].price * cartItems[index].qty;
    }
    // console.log(cartItems)
    setCartIems([...cartItems]);
    // sweet heart notification on item added to cart
    Swal.fire("", "Item Added to Cart!", "success");
    console.log([...cartItems])
    // console.log(item)
  };
  function incrementCart(item) {
    console.log(item)
    const index = cartItems.findIndex((p)=> p.id === item.id);
    if(index !== -1){
      cartItems[index].qty++
  }return cartItems;
}

  return (
    <>
      <div className="container-fluid bg-dark">
        <CartViewOffCanvas cartItems={cartItems} />
        <BuckatOffCanvas  incrementCart={incrementCart} selectedItem={selectedItem} item={cartItems} addToCart={addToCart} />
        <MenuPage handleCardClick={handleCardClick} />
        <Footer />
      </div>
    </>
  );
    
  
}

export default Home;
