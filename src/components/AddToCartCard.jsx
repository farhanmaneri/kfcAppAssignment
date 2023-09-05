import React from 'react'

function AddToCartCard({item}) {
  return (
    <div className="col">
    <div className="card" style={{ width: "18rem" }}>
        <h5 className="card-title">{item.title}</h5>
      <img src={item.image} style={{height:'10rem'}} className="card-img-top" alt="kfc card" />
      <div className="card-body">
        <p className="card-text">
            {item.dicription}
            <span className="badge text-bg-info">Rs. {item.price}</span>
        </p>
        
      </div>
    </div>
    </div>
  )
}

export default AddToCartCard;
