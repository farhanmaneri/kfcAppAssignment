import React from 'react';
import KfcCard from './KfcCard';

export default function Products({addToCart,handleCardClick, items}) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        
    {
        items.map(item => <KfcCard key={item.id} item={item} handleCardClick={handleCardClick} addToCart={addToCart}/>)
    }
    </div>
  )
}
