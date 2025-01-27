//CartContext.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Busca si ya existe el mismo producto con el mismo talle
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.product_name === product.product_name &&
          item.selectedSize === product.selectedSize
      );

      if (existingItemIndex > -1) {
        // Si existe, actualiza la cantidad
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      }

      // Si no existe, agrega el nuevo producto
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const item = prevItems[index];
      if (!item) return prevItems;

      if (item.quantity > 1) {
        const updatedItems = [...prevItems];
        updatedItems[index] = { ...item, quantity: item.quantity - 1 };
        return updatedItems;
      }
      return prevItems.filter((_, i) => i !== index);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};