//CheckoutForm.jsx
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';

const CheckoutForm = () => {
  const { t } = useTranslation("global");
  const [showOtherCountry, setShowOtherCountry] = useState(false);
  const [formValid, setFormValid] = useState(false);

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
    const inputs = document.querySelectorAll(".needs-validation input, .needs-validation select, .needs-validation textarea");
    inputs.forEach(input => input.addEventListener("input", checkFormValidity));
    return () => inputs.forEach(input => input.removeEventListener("input", checkFormValidity));
  }, []);

  return (
    <div className="bg-white w-full rounded-2xl border">
      <div className="w-full p-4">
        <form className="needs-validation peer grid gap-y-4" noValidate>
          {/* Shipping Details */}
          <div className="w-full mt-2">
            <h6 className="text-lg font-bold text-gray-600 flex items-center gap-4">
              <span className="icon-[tabler--truck-delivery] size-6"></span>
              {t("checkout.shipping_details")}
            </h6>
            <hr className="mt-2" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label label-text text-gray-600" htmlFor="userCountry">
                Select Country *
              </label>
              <select
                className="select bg-white text-gray-600"
                id="userCountry"
                aria-label="select"
                required
                onChange={handleCountryChange}
                defaultValue="united_states"
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
              <span className="error-message">Please select your country</span>
              <span className="success-message">Looks good!</span>
            </div>
            {/* Conditionally render the "Other Country" field */}
            {showOtherCountry && (
              <div>
                <label className="label label-text text-gray-600 text-gray-600" htmlFor="otherCountry">
                  Other Country *
                </label>
                <input
                  id="otherCountry"
                  type="text"
                  placeholder="Andorra"
                  className="input bg-white text-gray-600"
                  required
                />
                <span className="error-message">Please enter your country.</span>
                <span className="success-message">Looks good!</span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label label-text text-gray-600" htmlFor="state">
                State / Province / Region *
              </label>
              <input id="state" type="text" className="input bg-white text-gray-600 capitalize" required placeholder='California'/>
              <span className="error-message">Please enter the state</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text text-gray-600" htmlFor="city">
                City *
              </label>
              <input id="city" type="text" className="input bg-white text-gray-600 capitalize" required placeholder='San Francisco'/>
              <span className="error-message">Please enter the city</span>
              <span className="success-message">Looks good!</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div>
              <label className="label label-text text-gray-600" htmlFor="street">
                Street Name *
              </label>
              <input id="street" type="text" className="input bg-white text-gray-600 capitalize" required placeholder='Main Street'/>
              <span className="error-message">Please enter the street name</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text text-gray-600" htmlFor="number">
                Address Number *
              </label>
              <input id="number" type="text" className="input bg-white text-gray-600 capitalize" required placeholder='123'/>
              <span className="error-message">Please enter the address number</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text text-gray-600" htmlFor="apartment">
                Apartment, Suite, etc.
              </label>
              <input id="apartment" type="text" className="input bg-white text-gray-600 capitalize" placeholder='6th B'/>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text text-gray-600" htmlFor="zipCode">
                ZIP Code *
              </label>
              <input id="zipCode" type="text" className="input bg-white text-gray-600 capitalize" required placeholder='1234'/>
              <span className="success-message">Looks good!</span>
            </div>
          </div>

          <div className="w-full">
              <label className="label label-text text-gray-600" htmlFor="relevantInfo">
                Relevant shipping information
              </label>
              <textarea
                className="textarea min-h-20 resize-none text-gray-600"
                id="relevantInfo"
                placeholder="Back door, ring the bell, etc."
              ></textarea>
              <span className="success-message">Looks good!</span>
          </div>

          {/* Contact Details */}
          <div className="w-full mt-2">
            <h6 className="text-lg font-bold text-gray-600 flex items-center gap-4">
              <span className="icon-[tabler--message-user] size-6"></span>
              {t("checkout.contact_details")}
            </h6>
            <hr className="mt-2" />
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label label-text text-gray-600" htmlFor="email">
                Email *
              </label>
              <input id="email" type="email" className="input bg-white text-gray-600" required placeholder='underwather@hockey.com'/>
              <span className="error-message">Please enter an email</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div className="grid grid-cols-1 gap-6 grid-cols-2">
              <div className=''>
                <label className="label label-text text-gray-600" htmlFor="areaCode">
                  Area Code *
                </label>
                <input id="areaCode" type="text" className="input bg-white text-gray-600" required placeholder='+01'/>
                <span className="error-message">Please enter the city</span>
                <span className="success-message">Looks good!</span>
              </div>
              <div>
                <label className="label label-text text-gray-600" htmlFor="phone">
                  Phone Number *
                </label>
                <input id="phone" type="tel" className="input bg-white text-gray-600 " required placeholder='555 123456'/>
                <span className="error-message">Please enter the city</span>
                <span className="success-message">Looks good!</span>
              </div>

            </div>
          </div>           
          
          {/* Validations */}
          <div className="w-full mt-2">
            <h6 className="text-lg font-bold text-gray-600 flex items-center gap-4">
              <span className="icon-[tabler--progress-check] size-6"></span>
              {t("checkout.validations")}
            </h6>
            <hr className="mt-2" />
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" className="checkbox checkbox-primary bg-white" id="userAgre" required />
            <label className="label text-gray-600" htmlFor="userAgre">
            The payment link will be sent to the email address you provided. Please note that this email is not automatic and may take some time to be sent. Once you receive it, it means we are aware of your order. Your order will begin production once the payment has been received. By checking this box, you confirm that you have read and understood this information.
            </label>
            <span className="error-message">Please confirm our T&C</span>
            <span className="success-message">Looks good!</span>
          </div>


          <div className="flex items-center gap-3">
            <input type="checkbox" className="checkbox checkbox-primary bg-white" id="userAgre" required />
            <label className="label text-gray-600" htmlFor="userAgre">
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="underline">
                Agree to our terms and conditions.
              </a>
            </label>
            <span className="error-message">Please confirm our T&C</span>
            <span className="success-message">Looks good!</span>
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-center">
            <button type="submit" name="submitButton" className="btn btn-primary disabled:bg-primary-100 disabled:text-white border-none" disabled={!formValid}>
              Confirm order
            </button>
          </div>

        </form>
      </div>
    </div>
  
  );
};

export default CheckoutForm;