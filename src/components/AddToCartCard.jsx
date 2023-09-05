import React from "react";

function AddToCartCard({ item, selectedItem,addToCart }) {
  return (
    <div className="col d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <h3 className="card-title p-2  align-self-center">{item.title}</h3>{" "}
        <div>
          <img
            src={item.image}
            style={{ height: "11rem" }}
            className="card-img-top"
            alt="kfc card"
          />
        </div>
        <div className="card-body">
          <p className="card-text">{item.description}</p>
          <h3 className="badge text-bg-info">Rs. {item.price}</h3>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger rounded-circle ">-</button>
            {/* <h5>{selectedItem.length}</h5> */}
            <button className="btn btn-danger rounded-circle">+</button>
          </div>
          <button type="button"
          className="btn btn-primary"
          data-bs-dismiss="offcanvas"
          onClick={()=>addToCart(item)} >Add To Cart</button>

        </div>
      </div>
    </div> 
  );
}

export default AddToCartCard;
