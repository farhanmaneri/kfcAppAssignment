import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import CatButtons from "../components/CatButtons";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import ProductInfo from "./ProductInfo";
import { Link } from "react-router-dom";
// import { allItems } from "../data/prodcutsData";

export default function MenuPage({ addToCart,handleCardClick }) {
  const [selectedCatId, setSelectedCatid] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalData, setTotalData] = useState([])
  const [error, setError]= useState(false);
  const [loading, setLoading]= useState(false)
  const [categories ,setCategories]= useState(null)

useEffect(()=>{
  fetchData()
},[])


const fetchData= async ()=>{
  setLoading(true);
  try{
    let res = await fetch('https://fakestoreapi.com/products');
    if(res.ok){
      let data = await res.json()
      setProducts(data)
      setTotalData(data)
      // console.log(data)        
    }else{
      throw new Error('something went wrong!')
    }
  }catch(error){
    setError(error.message)
  }finally{
    setLoading(false)
  }
}
// const fetchCat= async ()=>{
//   setLoading(true);
//   try{
//     let result = await fetch('https://fakestoreapi.com/products/categories');
//     if(result.ok){
//       let categories = await result.json()
//       setCategories(categories)
//       // console.log(categories)        
//     }else{
//       throw new Error('something went wrong!')
//     }
//   }catch(error){
//     setError(error.message)
//   }finally{
//     setLoading(false)
//   }
// }

  const onCatSelection =  (category) => {
    // console.log(category);
    console.log(typeof category);
    // totalData
    setSelectedCatid(category);
    const filteredItems = totalData.filter((p) => p.category === category);
    // console.log(filteredItems)
    setProducts(filteredItems);
  };

  return (
    <>
      <div className="container-fluid mb-5">
      <Header/>

        <CatButtons onCatSelection={onCatSelection} totalData={totalData} categories={categories} selectedCatId={selectedCatId}/>
        <Products loading={loading} 
        error={error} addToCart={addToCart}
         handleCardClick={handleCardClick} 
         items={products} />
        {/* {products && <ProductInfo items={products} />} */}
        
        <Pagination />
    

      </div>
    </>
  );
};
