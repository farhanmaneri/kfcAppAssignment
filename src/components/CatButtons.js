import React from "react";
import { catgories } from "../data/categories";

export default function CatButtons({onCatSelection, selectedCatId}) {
  return (
    <>
      {catgories.map((cat) => (
        <button 
          type="button" 
          className={
            `m-1 btn 
            ${cat.id === selectedCatId? 'btn-info': 'btn-primary'}`
          }
          key={cat.id} 
          onClick={() => onCatSelection(cat.id)}
        >
          {cat.title}
        </button>
      ))}
    </>
  );
}
