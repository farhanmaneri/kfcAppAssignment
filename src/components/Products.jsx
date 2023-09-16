import React from "react";
import KfcCard from "./KfcCard";

export default function Products({ loading, error,addToCart, handleCardClick, items }) {
  return (
    <>
      
      <div>
{loading? <div className="container"><h1 style={{color:'white'}}>loading....</h1></div>
: error ? (<h1 style={{color:'white'}}> Error {error}</h1>) :
<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4  ">
        {items && items.map((item) => (
          <KfcCard
            key={item.id}
            item={item}
            handleCardClick={handleCardClick}
            addToCart={addToCart}
          />
        ))}
      </div>}
      </div>
      
    </>
  );
}
