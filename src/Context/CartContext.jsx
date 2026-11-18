import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saveItems = localStorage.getItem("userItems");
    return saveItems ? JSON.parse(saveItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("userItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItems) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === newItems.id);
      if (existingItem) {
        return prev;
      } else {
        return [...prev, newItems];
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
