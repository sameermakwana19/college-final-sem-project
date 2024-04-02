import React, { useMemo } from "react";

export const CartContext = React.createContext();

const CardContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([
    {
      id: "23",
      name: "Green Robot Action Figure",
      category: "kids",
      image: "https://source.unsplash.com/random/350x400/?toy&random=3",
      new_price: 60,
      old_price: 100.5,
      quantity: 1,
      size: "S",
    },
  ]);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1 && cart[index].size === product.size) {
      const newCart = [...cart];
      newCart[index].quantity += product.quantity;
      setCart(newCart);
      return;
    }

    console.log(product);
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id, size) => {
    const index = cart.findIndex(
      (item) => item.id === id && item.size === size
    );
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      return;
    }
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (acc, { quantity, new_price: price }) => acc + price * quantity,
    0
  );
  console.log(totalPrice);
  const values = useMemo(() => {
    return {
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      totalPrice,
      numOfItems: cart.reduce((acc, item) => acc + item.quantity, 0),
    };
  }, [cart]);

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CardContextProvider;
