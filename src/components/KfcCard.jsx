import React from "react";
import { useNavigate } from "react-router";

export default function KfcCard({item,handleCardClick}) {
const navigate = useNavigate()



  return (
    <div className="col mt-2">
    <div className="card" style={{ width: "18rem",height:" 30rem" }}>
      <img src={item.image} className="card-img-top" style={{height:'15rem'}} alt="kfc card" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
            {/* {item.description} */}
            <span className="badge text-bg-info">Rs. {item.price}</span>
        </p>
        <div className="d-flex justify-content-center">
        <button 
        className="btn btn-danger" 
        type="button" data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasRight1"
         aria-controls="offcanvasRight1"
         onClick={() => handleCardClick(item)}
          >
        + Add To Bucket
        </button></div>
        <button onClick={()=>{navigate(`products/${item.id}`)}}>
        Detail
        </button>

      </div>
    </div>
    </div>
  );
}
