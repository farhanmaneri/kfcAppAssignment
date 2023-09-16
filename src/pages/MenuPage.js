import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import CatButtons from "../components/CatButtons";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import ProductDetail from "./ProductDetail";
// import { allItems } from "../data/prodcutsData";

export default function MenuPage({ addToCart,handleCardClick }) {
  const [selectedCatId, setSelectedCatid] = useState(null);
  const [products, setProducts] = useState(null);
  const [error, setError]= useState(false);
  const [loading, setLoading]= useState(false)
  const [categories ,setCategories]= useState(null)

useEffect(()=>{
  const fetchData= async ()=>{
    setLoading(true);
    try{
      let res = await fetch('https://fakestoreapi.com/products');
      if(res.ok){
        let products = await res.json()
        setProducts(products)
        console.log(products)        
      }else{
        throw new Error('something went wrong!')
      }
    }catch(error){
      setError(error.message)
    }finally{
      setLoading(false)
    }
  }
  fetchData()
  const fetchCat= async ()=>{
    setLoading(true);
    try{
      let result = await fetch('https://fakestoreapi.com/products/categories');
      if(result.ok){
        let categories = await result.json()
        setCategories(categories)
        console.log(categories)        
      }else{
        throw new Error('something went wrong!')
      }
    }catch(error){
      setError(error.message)
    }finally{
      setLoading(false)
    }
  }
  fetchCat()
},[])

  const onCatSelection =  (category) => {
    console.log(category);
    console.log(typeof category);

    setSelectedCatid(category);
    const filteredItems = products.filter((p) => p.category === category);
    // console.log(filteredItems)
    setProducts(filteredItems);
  };

  return (
    <>
      <div className="container-fluid mb-5">
      <Header/>

        <CatButtons onCatSelection={onCatSelection} categories={categories} selectedCatId={selectedCatId}/>
        <Products loading={loading} error={error} addToCart={addToCart} handleCardClick={handleCardClick} items={products} />
        <Pagination />
        
      </div>
    </>
  );
};
