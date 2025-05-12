//Checkout.jsx
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import { useCart } from '../components/CartContext';
import { Icon } from '@iconify/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const COUPON_MAP = {
  DISCOUNT10: 10,
  SUMMER20: 20,
};

const Checkout = () => {
  const { t } = useTranslation("global");
  const { cartItems, removeFromCart } = useCart();

  // Estados de cupón
  const [couponValue, setCouponValue] = useState('');
  const [couponValid, setCouponValid] = useState(null); // null = untouched, true = valid, false = invalid

  const validateCoupon = (value) => {
    const code = value.trim().toUpperCase();
    return COUPON_MAP.hasOwnProperty(code) ? COUPON_MAP[code] : null;
  };

  const handleCouponChange = (e) => {
    const value = e.target.value;
    setCouponValue(value);
    const percent = validateCoupon(value);
    if (value.trim() === '') {
      setCouponValid(null);
    } else if (percent) {
      setCouponValid(percent);
    } else {
      setCouponValid(false);
    }
  };

  // Notyf
  const notyf = new Notyf({
    types: [{ type: 'error', background: '#f44336', duration: 2000, dismissible: false }],
  });

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
    notyf.error(t('product.remove_from_cart'));
  };

  // Subtotal original
  const originalSubtotal = cartItems
    .reduce((sum, item) => sum + item.product_selling * item.quantity, 0);

  // Descuento aplicado
  const percent = typeof couponValid === 'number' ? couponValid : 0;
  const discountedSubtotal = originalSubtotal * (1 - percent / 100);

  return (
    <div className="container flex flex-col gap-12 mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-12 sm:mt-20">
      {/* Resumen del carrito */}
      <div className="p-4 sm:p-6 border border-gray-300 rounded-2xl bg-white flex flex-col gap-y-4 sm:gap-y-6">
        {/* Header */}
        <div className="w-full mt-2">
          <h6 className="text-base sm:text-lg font-bold text-gray-600 flex items-center gap-2 sm:gap-4">
            <Icon icon="icon-park-twotone:shopping" className="w-6 h-6 text-pink-800" />
            {t('checkout.order_details')}
          </h6>
          <hr className="mt-2" />
        </div>

        {/* Items */}
        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-sm sm:text-base">{t('cart.empty')}</p>
        ) : (
          <ul className="space-y-4 sm:space-y-6">
            {cartItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 sm:gap-6 border-b border-gray-300 pb-4 sm:pb-6 last:border-b-0">
                <img src={item.image} alt={item.product_name} className="w-16 sm:w-20 rounded-2xl object-cover" />
                <div className="flex flex-col flex-grow">
                  <h6 className="text-gray-600 font-medium text-sm sm:text-base">{item.product_name}</h6>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.product_category}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{t('cart.size')}: {item.selectedSize}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{t('cart.pieces')}: {item.quantity}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-gray-600 text-xs sm:text-sm">
                    ${(item.product_selling * item.quantity).toFixed(2)} USD
                  </span>
                  <button onClick={() => handleRemoveFromCart(idx)} className="text-red-500 hover:text-red-700 text-xs sm:text-sm mt-2">
                    {t('cart.remove')}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <hr className="mt-4" />

        {/* Cupón y Subtotal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <input
              id="discountCode"
              type="text"
              value={couponValue}
              onChange={handleCouponChange}
              placeholder={t('checkout.discount_code')}
              className={
                `mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-600 focus:border-pink-800 ` +
                (couponValid === false
                  ? 'outline outline-2 outline-red-500'
                  : couponValid
                  ? 'outline outline-2 outline-green-500'
                  : '')
              }
            />
          </div>
          <div className="text-right">
            <div>{t("cart.subtotal_without_shipping")}</div>
            <div className='flex justify-end gap-2'>
              <span className={couponValid ? 'text-gray-300 line-through' : 'text-gray-600 font-semibold'}>
              {originalSubtotal.toFixed(2)} USD
              </span>
              {couponValid && (
              <span className="text-gray-600 font-semibold">
                {discountedSubtotal.toFixed(2)} USD
              </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de pago */}
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
