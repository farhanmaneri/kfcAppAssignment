import React ,{useState,useEffect}from "react";
// import {categories } from '../data/categories'
export default function CatButtons({onCatSelection,totalData ,selectedCatId}) {

  // to avoid repitition of categories uniqueCategories is taken
  const uniqueCategories = [...new Set(totalData.map((cat) => cat.category))];
  console.log('unique.....',uniqueCategories)

  return (
    <>
      {uniqueCategories.map((cat) => (
        <button 
          type="button" 
          className={
            `m-1 btn 
            ${cat === selectedCatId? 'btn-info': 'btn-primary'}`
          }
          key={cat.id} 
          onClick={() => onCatSelection(cat)}
          
        >
          {cat}
        </button>
      ))}
    </>
  );
}
