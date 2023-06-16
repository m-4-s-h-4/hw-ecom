import { useContext } from "react";
import "./cart.css";
import CartContext from "./CartContext";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-grid">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <button
              className="remove-btn"
              onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
            >
              Remove
            </button>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <h3>{item.price}£</h3>
          </div>
        ))}
      </div>
      <div className="checkout">
        <h2>Total: {totalPrice}£</h2>
      </div>
    </div>
  );
}
