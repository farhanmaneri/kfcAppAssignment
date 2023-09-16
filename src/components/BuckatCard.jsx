import React from "react";
import Swal from "sweetalert2";

function BuckatCard({ item, selectedItem, addToCart , quantity, incrementCart }) {
  return (
    <div className="col d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <h3 className="card-title p-2  align-self-center">{item.title}</h3>{" "}
        <div>
          <img
            src={item.image}
            style={{ height: "10rem" }}
            className="card-img-top"
            alt="kfc card"
          />
        </div>
        <div className="card-body">
          <p className="card-text">{item.description}</p>
          <h3 className="badge text-bg-info">Rs. {item.price}</h3>
          <div className="d-flex justify-content-around">
            <button className="btn btn-danger rounded-circle ">-</button>
            <h5>{quantity}</h5>
            <button onClick={()=>incrementCart(item)} className="btn btn-danger rounded-circle">+</button>
          </div>
          <div className="d-flex justify-content-center mt-5 ">
            <button type="button"
              className="col-md-6 .offset-md-3 btn btn-primary"
              data-bs-dismiss="offcanvas"
              onClick={() => addToCart(item)} >Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuckatCard;
