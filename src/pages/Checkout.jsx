//Checkout.jsx
import { useTranslation } from 'react-i18next';
import CheckoutForm from '../components/CheckoutForm';
import { useCart } from '../components/CartContext';
import { Icon } from '@iconify/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const Checkout = () => {
  const { t } = useTranslation("global");
  const { cartItems, removeFromCart } = useCart();

  // Inicializamos Notyf para las notificaciones
  const notyf = new Notyf({
    types: [
      {
        type: "error",
        background: "#f44336",
        duration: 2000,
        dismissible: false,
      },
    ],
  });

  // Función para eliminar productos del carrito
  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
    notyf.error(t("product.remove_from_cart"));
  };

  // Calculamos el subtotal del carrito
  const subtotal = cartItems.reduce((total, item) => total + item.product_selling * item.quantity, 0).toFixed(2);

  return (
<div className="container flex flex-col gap-12 mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-12 sm:mt-20">
  {/* Resumen del carrito con opción de eliminar */}
  <div className="p-4 sm:p-6 border border-gray-300 rounded-2xl bg-white flex flex-col gap-y-4 sm:gap-y-6">
    <div className="w-full mt-2">
      <h6 className="text-base sm:text-lg font-bold text-gray-600 flex items-center gap-2 sm:gap-4">
        <Icon icon="icon-park-twotone:shopping" className="w-6 h-6 flex-shrink-0 sm:w-6 sm:h-6 text-pink-800" />
        {t("checkout.order_details")}
      </h6>
      <hr className="mt-2" />
    </div>
    {cartItems.length === 0 ? (
      <p className="text-gray-600 text-sm sm:text-base">{t("cart.empty")}</p>
    ) : (
      <ul className="space-y-4 sm:space-y-6">
        {cartItems.map((item, index) => (
          <li key={index} className="flex items-center gap-4 sm:gap-6 border-b border-gray-300 pb-4 sm:pb-6 last:border-b-0">
            {/* Imagen del producto */}
            <img 
              src={item.image} 
              alt={item.product_name} 
              className="w-16 sm:w-20 object-cover rounded-2xl"
              loading="lazy"
            />
            
            <div className="flex flex-col flex-grow">
              <h6 className="text-gray-600 font-medium text-sm sm:text-base">{item.product_name}</h6>
              <p className="text-gray-400 text-xs sm:text-sm">{item.product_category}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{t("cart.size")}: {item.selectedSize}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{t("cart.pieces")}: {item.quantity}</p>
            </div>
  
            <div className="flex flex-col items-end">
              <span className="text-gray-600 text-xs sm:text-sm">
                ${(item.product_selling * item.quantity).toFixed(2)} USD
              </span>
              {/* Botón para eliminar producto */}
              <button
                className="text-red-500 hover:text-red-700 text-xs sm:text-sm mt-2"
                onClick={() => handleRemoveFromCart(index)}
              >
                {t("cart.remove")}
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
    <hr className="mt-4" />
    <div className="flex justify-between font-semibold text-gray-600 text-sm sm:text-base">
      <span>{t("cart.subtotal_without_shipping")}</span>
      <span>{subtotal} USD</span>
    </div>
  </div>

  
      {/* Formulario de pago */}
      <CheckoutForm />
    </div>
  );
  };
  
  export default Checkout;
  