import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const getItem = JSON.parse(localStorage.getItem("cart")) || [];
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getItem);
  // store cart in Localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  //   add to cart
  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  // calc total price
  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);
  const removeItemFromCsrt = (item) => {
    const remainingItems = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(remainingItems);
  };

  const handleIncrease = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cart.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    setCart(updatedCart);
  };

  const handleDecrease = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cart.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    setCart(updatedCart);
  };
  const [showModal, setShowModal] = useState(false);
  const confirmOrder = () => {
    setShowModal(true);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalPrice,
        removeItemFromCsrt,
        handleIncrease,
        handleDecrease,
        showModal,
        setShowModal,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
