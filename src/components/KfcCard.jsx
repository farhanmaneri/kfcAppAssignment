import React from "react";

export default function KfcCard({item, addToCart}) {
  return (
    <div className="col">
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt="kfc card" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
            {item.description}
            <span className="badge text-bg-info">Rs. {item.price}</span>
        </p>
        
        <button 
        class="btn btn-primary" 
        type="button" data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasRight1"
         aria-controls="offcanvasRight1"
         onClick={() => addToCart(item)}
          >
          Add to Cart
        </button>

      </div>
    </div>
    </div>
  );
}
