import React, { useEffect, useState } from "react";
import "../../styles/Payment.css";
import { useCart } from "../../contexts/CartContextProvider";

const Payment = () => {
  const { getCart, cart } = useCart();

  const [cartLocal, setCartLocal] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setCartLocal(JSON.parse(localStorage.getItem("cart")));
  }, []);

  console.log(cartLocal);
  return (
    <div className="payment_list">
      <div className="items_list">
        {cartLocal.length !== 0 ? (
          cartLocal.dishes.map((item) => (
            <>
              <h3 key={item.item.name}> Name: {item.item.name}</h3>
              <p key={item.item.description}> Count: {item.count}</p>
            </>
          ))
        ) : (
          <h3>Cart is empty</h3>
        )}
      </div>
      <div className="payment_btn">
        <button>ORDER</button>
        <button>CANCEL</button>
      </div>
    </div>
  );
};

export default Payment;
