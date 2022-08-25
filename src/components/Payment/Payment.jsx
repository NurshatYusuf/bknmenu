import React from "react";
import "../../styles/Payment.css";

const Payment = () => {
    return (
        <div className="payment_list">
            <div className="items_list">
                {/* тут будем перебирать товары */}
                <h3>Товар 1</h3>
                <h3>Товар 2</h3>
                <h3>Товар 3</h3>
                <h3>Товар 4</h3>
                <h3>Товар 5</h3>
            </div>
            <div className="payment_btn">
                <button>ORDER</button>
                <button>CANCEL</button>
            </div>
        </div>
    )
};

export default Payment;