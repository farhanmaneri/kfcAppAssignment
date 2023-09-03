import React, { useState } from "react";
import Products from "../components/Products";
import CatButtons from "../components/CatButtons";
import Pagination from "../components/Pagination";
import { allItems } from "../data/prodcutsData";

export default function MenuPage({ addToCart }) {
  const [selectedCatId, setSelectedCatid] = useState(null);
  const [products, setProducts] = useState(allItems);

  const onCatSelection = (catId) => {
    console.log(catId);
    // console.log(typeof catId);
    setSelectedCatid(catId);
    const filteredItems = allItems.filter((p) => p.categoryId === catId);
    setProducts(filteredItems);
  };

  return (
    <>
      <div className="container mb-5">
        <CatButtons onCatSelection={onCatSelection} selectedCatId={selectedCatId}/>
        <Products addToCart={addToCart} items={products} />
        <Pagination />
      </div>
    </>
  );
}
