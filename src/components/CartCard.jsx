import React from 'react'

function CartCard({ item }) {
    return (
        <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                <h5 className="card-title p-2  align-self-center">{item.title}</h5>{" "}
                <div>
                    <img
                        src={item.image}
                        style={{ height: "11rem" }}
                        className="card-img-top"
                        alt="kfc card"
                    />
                </div>
                <div className="card-body">
                    <h5 className="badge text-bg-info">Rs. {item.price}</h5>
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-danger rounded-circle ">-</button>
                        {/* <h5>{selectedItem.length}</h5> */}
                        <button className="btn btn-danger rounded-circle">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard;