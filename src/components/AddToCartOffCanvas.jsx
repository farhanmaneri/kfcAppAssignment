import React from "react";
import AddToCartCard from "./AddToCartCard";

function AddToCartOffCanvas({ selectedItem,addToCart }) {
  return (
    <div
      class="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight1"
      aria-labelledby="offcanvasRightLabel1"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel1">Bucket Items</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body d-flex justify-content-center">
        <div className="row row-cols-1  ">
          {selectedItem.map((item) => (
            <div className="d-flex flex-column">
            <AddToCartCard key={item.id} item={item} selectedItem={selectedItem}  addToCart={addToCart}/>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
}

export default AddToCartOffCanvas;
