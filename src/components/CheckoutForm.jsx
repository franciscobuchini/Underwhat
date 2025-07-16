import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import emailjs from '@emailjs/browser';
import countries from '../data/Countries';

const CheckoutForm = ({
  couponCode = "",
  discountPercent = 0,
  discountedTotal = 0
}) => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const [showOtherCountry, setShowOtherCountry] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cartItems, clearCart } = useCart();

  const checkFormValidity = () => {
    const form = document.querySelector(".needs-validation");
    setFormValid(form?.checkValidity() || false);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(
      ".needs-validation input, .needs-validation select, .needs-validation textarea"
    );
    inputs.forEach((input) => input.addEventListener("input", checkFormValidity));
    return () =>
      inputs.forEach((input) =>
        input.removeEventListener("input", checkFormValidity)
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid || isSubmitting) return;
    setIsSubmitting(true);

    // Calcula subtotal
    let overallTotal = 0;
    const orderDetails = cartItems.map((item, index) => {
      const price = Number(item.product_selling) || 0;
      const quantity = Number(item.quantity) || 0;
      const totalForItem = price * quantity;
      overallTotal += totalForItem;
       return `Item ${index + 1}:
- Name: ${item.product_name}
- Quantity: ${quantity}
- Unit Price: $${price.toFixed(2)}
- Size: ${item.selectedSize || "N/A"}
${item.backNumber ? `- Number: ${item.backNumber}` : ""}
- Total: $${totalForItem.toFixed(2)}`;
}).join("\n\n")
+ `\n\nSubtotal: $${overallTotal.toFixed(2)}`
+ (discountPercent
    ? `\nCoupon: ${couponCode} (${discountPercent}% off)\nTotal after discount: $${discountedTotal.toFixed(2)}`
    : `\nTotal: $${overallTotal.toFixed(2)}`);

    // Inputs ocultos
    const appendHidden = (name, value) => {
      const inp = document.createElement("input");
      inp.type = "hidden";
      inp.name = name;
      inp.value = value;
      e.target.appendChild(inp);
    };

    appendHidden("order_details", orderDetails);
    appendHidden("coupon_code", couponCode);
    // Usa overallTotal si no hay descuento
    const finalTotal = discountPercent
      ? discountedTotal.toFixed(2)
      : overallTotal.toFixed(2);
    appendHidden("order_total", finalTotal);

    // Envío con EmailJS
    emailjs.sendForm(
      "service_mxgszmr",
      "template_wiufec1",
      e.target,
      "DDTayKSsIeSLZhvSH"
    )
    .then(() => {
      clearCart();
      navigate("/successfull");
    })
    .catch((err) => {
      console.error("Error sending email:", err.text);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300">
      <div className="w-full p-6"> {/* Aumentamos el padding */}
        <form className="needs-validation grid gap-y-8" noValidate onSubmit={handleSubmit}> {/* gap-y aumentado */}
          {/* Shipping Details */}
          <div className="w-full mt-4">
            <h6 className="text-lg font-bold text-gray-600 flex items-center gap-4">
              <Icon icon="icon-park-twotone:airplane" className="w-6 h-6 flex-shrink-0 text-pink-800" />
              {t("checkout.shipping_details")}
            </h6>
            <hr className="mt-2" />
          </div>
  
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  <div>
    <label className="block text-sm font-medium text-gray-600" htmlFor="userCountry">
      {t("checkout.select_country")} *
    </label>
    <select
      id="userCountry"
      name="userCountry"
      required
      defaultValue="US"
      onChange={(e) => {
        const selected = e.target.value;
        setShowOtherCountry(selected === 'OTHER');
      }}
      className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 focus:border-pink-800"
    >
      {countries.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
      <option value="OTHER">{t("checkout.other")}</option>
    </select>
  </div>

  {showOtherCountry && (
    <div>
      <label className="block text-sm font-medium text-gray-600" htmlFor="otherCountry">
        {t("checkout.other_country")} *
      </label>
      <input
        id="otherCountry"
        name="otherCountry"
        type="text"
        placeholder="Andorra"
        required
        className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 focus:border-pink-800"
      />
    </div>
  )}
</div>
  
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="state">
                {t("checkout.state")} *
              </label>
              <input
                id="state"
                name="state"
                type="text"
                required
                placeholder="California"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 capitalize focus:border-pink-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="city">
                {t("checkout.city")} *
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                placeholder="San Francisco"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 capitalize focus:border-pink-800"
              />
            </div>
          </div>
  
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="street">
                {t("checkout.street_name")} *
              </label>
              <input
                id="street"
                name="street"
                type="text"
                required
                placeholder="Main Street"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 capitalize focus:border-pink-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="number">
                {t("checkout.address_number")} *
              </label>
              <input
                id="number"
                name="number"
                type="text"
                required
                placeholder="123"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 capitalize focus:border-pink-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="apartment">
                {t("checkout.apartment_suite")}
              </label>
              <input
                id="apartment"
                name="apartment"
                type="text"
                placeholder="6th B"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 capitalize focus:border-pink-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="zipCode">
                {t("checkout.zip_code")} *
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                required
                placeholder="1234"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 capitalize focus:border-pink-800"
              />
            </div>
          </div>
  
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600" htmlFor="shippingInfo">
              {t("checkout.relevant_shipping_info")}
            </label>
            <textarea
              id="shippingInfo"
              name="shippingInfo"
              placeholder={t("checkout.shipping_info_placeholder")}
              rows="2"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 focus:border-pink-800 resize-none"
            ></textarea>
          </div>
  
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600" htmlFor="forUsInfo">
              {t("checkout.relevant_forUs_info")}
            </label>
            <textarea
              id="forUsInfo"
              name="forUsInfo"
              placeholder={t("checkout.forUs_info_placeholder")}
              rows="2"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 focus:border-pink-800 resize-none"
            ></textarea>
          </div>

          {/* Contact Details */}
          <div className="w-full mt-6">
            <h6 className="text-lg font-bold text-gray-600 flex items-center gap-4">
              <Icon icon="icon-park-twotone:message" className="w-6 h-6 flex-shrink-0 text-pink-800" />
              {t("checkout.contact_details")}
            </h6>
            <hr className="mt-2" />
          </div>
  
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="email">
                {t("checkout.email")} *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="underwater@hockey.com"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 focus:border-pink-800"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="areaCode">
                  {t("checkout.area_code")} *
                </label>
                <input
                  id="areaCode"
                  name="areaCode"
                  type="text"
                  required
                  placeholder="+01"
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 focus:border-pink-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="phone">
                  {t("checkout.phone_number")} *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="555 123456"
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 focus:border-pink-800"
                />
              </div>
            </div>
          </div>
  
          {/* Validations */}
          <div className="w-full mt-6">
            <h6 className="text-lg font-bold text-gray-600 flex items-center gap-4">
              <Icon icon="icon-park-twotone:check-one" className="w-6 h-6 flex-shrink-0 text-pink-800" />
              {t("checkout.validations")}
            </h6>
            <hr className="mt-2" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="teamName">
                {t("checkout.teamName")}
              </label>
              <input
                id="teamName"
                name="teamName"
                type="text"
                placeholder={t("checkout.teamName_placeholder")}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 focus:border-pink-800"
              />
            </div>
           </div>
          <div className="flex items-center gap-4 mt-4">
            <input type="checkbox" id="userAgree" required className="h-4 cursor-pointer" />
            <label htmlFor="userAgree" className="text-gray-600 text-sm">
              {t("checkout.validation_text")}
            </label>
          </div>
  
          <div className="flex items-center gap-4">
            <input type="checkbox" id="priceAgree" required className="h-4 cursor-pointer" />
            <label htmlFor="priceAgree" className="text-gray-600 text-sm">
              {t("checkout.final_price_text")}
            </label>
          </div>
  
          <div className="flex items-center gap-4">
            <input type="checkbox" id="termsAgree" required className="h-4 cursor-pointer" />
            <label htmlFor="termsAgree" className="text-gray-600 text-sm">
              <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline">
                {t("checkout.agree_terms")}
              </a>
            </label>
          </div>
  
          {/* Botón de envío */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              name="submitButton"
              disabled={!formValid || isSubmitting}
              className="w-full max-w-xs bg-pink-800 py-3 px-6 text-sm font-bold text-white hover:bg-pink-800 disabled:bg-gray-400 enabled:cursor-pointer rounded-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  {t("checkout.confirming")}
                </>
              ) : (
                t("checkout.confirm_order")
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  };
  
  export default CheckoutForm;