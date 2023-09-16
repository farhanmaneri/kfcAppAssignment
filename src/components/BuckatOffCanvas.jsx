import React from "react";
import BuckatCard from "./BuckatCard";

function BuckatOffCanvas({ selectedItem, addToCart,  incrementCart }) {
  function calculateQuantity(item) {
    const selectedItemsCount = selectedItem.filter(
      (selected) => selected.id === item.id
    ).length;
    return selectedItemsCount;
  }
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
              <BuckatCard
                key={item.id}
                quantity={calculateQuantity(item)}
                incrementCart={incrementCart}
                item={item}
                selectedItem={selectedItem}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
}

export default BuckatOffCanvas;
