import React from "react";
import BuckatCard from "./BuckatCard";
import CartCard from "./CartCard";

export default function CartViewOffCanvas({ cartItems }) {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Cart Items
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cartItems.length ? (
             <div className="row row-cols-1 ">
        
             {
                 cartItems.map(item => <div className="d-flex flex-column"><CartCard key={item.id} item={item}  />

                 </div>)
             }

             </div>
            // cartItems.map((c) => (
            //   <div >
            //     <ul style={{listStyle:'none'}}>
            //       <li ><img src={c.image} className="card-img-top" alt="kfc card"width={'150px'} height={'200px'}/></li>
            //       <li>{c.title}</li>
            //       <li>Rs.{c.price}</li>
            //     </ul>
            //   </div>
            // ))
          ) : (
            <p>Cart is Empty</p>
          )}
        </div>
      </div>
    </>
  );
}
