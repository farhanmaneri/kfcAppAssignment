import React ,{useState,useEffect}from "react";
// import {categories } from '../data/categories'
export default function CatButtons({onCatSelection,categories, selectedCatId}) {

   
  
  return (
    <>
      {categories && categories.map((cat) => (
        <button 
          type="button" 
          className={
            `m-1 btn 
            ${cat === selectedCatId? 'btn-info': 'btn-primary'}`
          }
          key={cat} 
          onClick={() => onCatSelection(cat)}
          
        >
          {cat}
        </button>
      ))}
    </>
  );
}
