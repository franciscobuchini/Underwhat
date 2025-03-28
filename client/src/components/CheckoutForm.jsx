import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';

const CheckoutForm = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const [showOtherCountry, setShowOtherCountry] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const { clearCart } = useCart();

  const handleCountryChange = (event) => {
    setShowOtherCountry(event.target.value === 'other');
  };

  const checkFormValidity = () => {
    const form = document.querySelector(".needs-validation");
    if (form) {
      setFormValid(form.checkValidity());
    }
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
    if (formValid) {
      // Reiniciamos el carrito en el contexto y localStorage
      clearCart();
      console.log("Formulario enviado y carrito reiniciado a cero");
      // Redirigir a la página de éxito
      navigate('/successfull');
    }
  };
  
  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300">
      <div className="w-full p-4">
        <form className="needs-validation grid gap-y-6" noValidate onSubmit={handleSubmit}>
          {/* Shipping Details */}
          <div className="w-full mt-2">
            <h6 className="text-lg font-bold text-gray-600 flex items-center gap-4">
              <Icon icon="icon-park-twotone:airplane" className="size-6 text-pink-800"/>
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
                required
                onChange={handleCountryChange}
                defaultValue="united_states"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800 "
              >
                <option value="angola">Angola</option>
                <option value="argentina">Argentina</option>
                <option value="australia">Australia</option>
                <option value="bahrain">Bahrain</option>
                <option value="belgium">Belgium</option>
                <option value="brazil">Brazil</option>
                <option value="bulgaria">Bulgaria</option>
                <option value="canada">Canada</option>
                <option value="china">China</option>
                <option value="colombia">Colombia</option>
                <option value="croatia">Croatia</option>
                <option value="czechia">Czechia</option>
                <option value="denmark">Denmark</option>
                <option value="ecuador">Ecuador</option>
                <option value="egypt">Egypt</option>
                <option value="fiji">Fiji</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="hungary">Hungary</option>
                <option value="indonesia">Indonesia</option>
                <option value="ireland">Ireland</option>
                <option value="israel">Israel</option>
                <option value="italy">Italy</option>
                <option value="japan">Japan</option>
                <option value="jordan">Jordan</option>
                <option value="kenya">Kenya</option>
                <option value="liechtenstein">Liechtenstein</option>
                <option value="malaysia">Malaysia</option>
                <option value="namibia">Namibia</option>
                <option value="netherlands">Netherlands</option>
                <option value="new_caledonia">New Caledonia</option>
                <option value="new_zealand">New Zealand</option>
                <option value="norway">Norway</option>
                <option value="philippines">Philippines</option>
                <option value="poland">Poland</option>
                <option value="portugal">Portugal</option>
                <option value="rwanda">Rwanda</option>
                <option value="saudi_arabia">Saudi Arabia</option>
                <option value="serbia">Serbia</option>
                <option value="singapore">Singapore</option>
                <option value="slovenia">Slovenia</option>
                <option value="south_africa">South Africa</option>
                <option value="korea_south">South Korea</option>
                <option value="spain">Spain</option>
                <option value="switzerland">Switzerland</option>
                <option value="tanzania">Tanzania</option>
                <option value="turkey">Turkey</option>
                <option value="united_arab_emirates">United Arab Emirates</option>
                <option value="united_kingdom">United Kingdom</option>
                <option value="united_states">United States</option>
                <option value="other">Other...</option>
                </select>
            </div>
            {showOtherCountry && (
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="otherCountry">
                  {t("checkout.other_country")} *
                </label>
                <input
                  id="otherCountry"
                  type="text"
                  placeholder="Andorra"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800 "
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="state">
                {t("checkout.state")} *
              </label>
              <input
                id="state"
                type="text"
                required
                placeholder="California"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 capitalize focus:border-pink-800 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="city">
                {t("checkout.city")} *
              </label>
              <input
                id="city"
                type="text"
                required
                placeholder="San Francisco"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 capitalize focus:border-pink-800 "
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
                type="text"
                required
                placeholder="Main Street"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 capitalize focus:border-pink-800 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="number">
                {t("checkout.address_number")} *
              </label>
              <input
                id="number"
                type="text"
                required
                placeholder="123"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 capitalize focus:border-pink-800 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="apartment">
                {t("checkout.apartment_suite")}
              </label>
              <input
                id="apartment"
                type="text"
                placeholder="6th B"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 capitalize focus:border-pink-800 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="zipCode">
                {t("checkout.zip_code")} *
              </label>
              <input
                id="zipCode"
                type="text"
                required
                placeholder="1234"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 capitalize focus:border-pink-800 "
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600" htmlFor="shippingInfo">
              {t("checkout.relevant_shipping_info")}
            </label>
            <textarea
              id="shippingInfo"
              placeholder={t("checkout.shipping_info_placeholder")}
              rows="1"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800  resize-none"
            ></textarea>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600" htmlFor="forUsInfo">
              {t("checkout.relevant_forUs_info")}
            </label>
            <textarea
              id="forUsInfo"
              placeholder={t("checkout.forUs_info_placeholder")}
              rows="1"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800  resize-none"
            ></textarea>
          </div>

          {/* Contact Details */}
          <div className="w-full mt-2">
            <h6 className="text-lg font-bold text-gray-600 flex items-center gap-4">
              <Icon icon="icon-park-twotone:message" className="size-6 text-pink-800"/>
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
                type="email"
                required
                placeholder="underwather@hockey.com"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800 "
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="areaCode">
                  {t("checkout.area_code")} *
                </label>
                <input
                  id="areaCode"
                  type="text"
                  required
                  placeholder="+01"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800 "
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="phone">
                  {t("checkout.phone_number")} *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="555 123456"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800 "
                />
              </div>
            </div>
          </div>

          {/* Validations */}
          <div className="w-full mt-2">
            <h6 className="text-lg font-bold text-gray-600 flex items-center gap-4">
              <Icon icon="icon-park-twotone:check-one" className="size-6 text-pink-800"/>
              {t("checkout.validations")}
            </h6>
            <hr className="mt-2" />
          </div>

          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="userAgree"
              required
              className="h-4 cursor-pointer"
            />
            <label htmlFor="userAgree" className="text-gray-600 text-sm">
              {t("checkout.validation_text")}
            </label>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="priceAgree"
              required
              className="h-4 cursor-pointer"
            />
            <label htmlFor="priceAgree" className="text-gray-600 text-sm">
              {t("checkout.final_price_text")}
            </label>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="termsAgree"
              required
              className="h-4 cursor-pointer"
            />
            <label htmlFor="termsAgree" className="text-gray-600 text-sm">
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {t("checkout.agree_terms")}
              </a>
            </label>
          </div>

          {/* Botón de envío */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              name="submitButton"
              disabled={!formValid}
              className="w-full max-w-xs bg-pink-800 py-2 px-4 text-sm font-bold text-white hover:bg-pink-800 disabled:bg-gray-400 enabled:cursor-pointer rounded-full"
            >
              {t("checkout.confirm_order")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;