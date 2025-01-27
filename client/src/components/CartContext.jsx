//CartContext.jsx
import { createContext, useContext, useState } from "react";

// 1. Primero crea el contexto
const CartContext = createContext();

// 2. Luego crea el Provider y el hook
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => 
        item.id === product.id && // <- Asume que cada producto tiene un ID único
        item.selectedSize === product.selectedSize
      );
      
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, id: product.id, quantity: 1 }];
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

// 3. Exporta el hook que usa el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};