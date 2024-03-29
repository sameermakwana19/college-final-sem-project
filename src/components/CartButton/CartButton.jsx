import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CardContextProvider";

const CartButton = () => {
  const { numOfItems } = useContext(CartContext);
  return (
    <div className="cartbutton-container">
      <Link to="/cart">
        <div className="cart-icon">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <p className="cart-items-count">{numOfItems}</p>
      </Link>
    </div>
  );
};

export default CartButton;
