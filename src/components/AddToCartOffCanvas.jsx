import React from "react";
import AddToCartCard from "./AddToCartCard";

function AddToCartOffCanvas({ cartItems }) {
  return (
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight1"
      aria-labelledby="offcanvasRightLabel1"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel1">Offcanvas right</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div className="row row-cols-1 ">
          {cartItems.map((item) => (
            <div className="d-flex flex-column">
              <AddToCartCard key={item.id} item={item} />
            </div>
          ))}
        </div>{" "}
      <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
}

export default AddToCartOffCanvas;
