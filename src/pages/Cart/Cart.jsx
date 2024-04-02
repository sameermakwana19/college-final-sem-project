import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext/CardContextProvider";

const Cart = () => {
  const { cart, removeFromCart, numOfItems, totalPrice } =
    useContext(CartContext);
  console.log(cart);
  if (numOfItems === 0) {
    return (
      <div className="cart">
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="products-details">
        <div className="header">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Size</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className="body">
          {cart?.map(
            ({ id, image, name, new_price: price, quantity, size }) => (
              <div className="product" key={id}>
                <div className="product-img">
                  <img src={image} alt="" />
                </div>
                <p className="product-title">{name}</p>
                <p className="product-price">{price}</p>
                <p className="product-price">{size}</p>
                <div className="product-quantity">{quantity}</div>
                <p className="product-total">{quantity * price}</p>
                <div
                  className="product-remove"
                  onClick={() => removeFromCart(id, size)}
                >
                  <i className="fa-solid fa-x"></i>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="cart-total">
        <div className="total-price-section">
          <h2>Cart Total</h2>
          <div>
            Total Price : <p>{totalPrice}</p>
          </div>
          <div>
            shipping Fee : <p>{"Free"}</p>
          </div>
          <div>
            Total : <p>{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
