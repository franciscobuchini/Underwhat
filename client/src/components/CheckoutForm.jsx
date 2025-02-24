//CheckoutForm.jsx
import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';

const CheckoutForm = () => {
  // State to control the visibility of the "Other Country" field
  const [showOtherCountry, setShowOtherCountry] = useState(false);

  // Initialize flatpickr using useEffect
  useEffect(() => {
    flatpickr('#jsPickr', {
      allowInput: true,
      monthSelectorType: 'static',
    });
  }, []);

  // Handle changes in the country selector
  const handleCountryChange = (event) => {
    setShowOtherCountry(event.target.value === 'other');
  };

  return (
    <div className="bg-base-100 w-full rounded-lg shadow">
      <h5 className="bg-base-300 rounded-t-lg p-4 text-base text-xl font-bold">JS Validation</h5>
      <div className="w-full p-4">
        <form className="needs-validation peer grid gap-y-4" noValidate>
          {/* Shipping Details */}
          <div className="w-full">
            <h6 className="text-lg font-semibold">Shipping Details</h6>
            <hr className="mb-4 mt-2" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label label-text" htmlFor="userCountry">
                Select Country *
              </label>
              <select
                className="select"
                id="userCountry"
                aria-label="select"
                required
                onChange={handleCountryChange}
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
                <option value="turkmenistan">Turkmenistan</option>
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
                <label className="label label-text" htmlFor="otherCountry">
                  Other Country *
                </label>
                <input
                  id="otherCountry"
                  type="text"
                  placeholder="Andorra"
                  className="input"
                  required
                />
                <span className="error-message">Please enter your country.</span>
                <span className="success-message">Looks good!</span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label label-text" htmlFor="state">
                State / Province / Region *
              </label>
              <input id="state" type="text" className="input capitalize" required placeholder='California'/>
              <span className="error-message">Please enter the state</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text" htmlFor="city">
                City *
              </label>
              <input id="city" type="text" className="input capitalize" required placeholder='San Francisco'/>
              <span className="error-message">Please enter the city</span>
              <span className="success-message">Looks good!</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div>
              <label className="label label-text" htmlFor="street">
                Street Name *
              </label>
              <input id="street" type="text" className="input capitalize" required placeholder='Main Street'/>
              <span className="error-message">Please enter the street name</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text" htmlFor="number">
                Address Number *
              </label>
              <input id="number" type="text" className="input capitalize" required placeholder='123'/>
              <span className="error-message">Please enter the address number</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text" htmlFor="apartment">
                Apartment, Suite, etc.
              </label>
              <input id="apartment" type="text" className="input capitalize" placeholder='6th B'/>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text" htmlFor="zipCode">
                ZIP Code *
              </label>
              <input id="zipCode" type="text" className="input capitalize" required placeholder='1234'/>
              <span className="success-message">Looks good!</span>
            </div>
          </div>

            <div className="w-full">
              <label className="label label-text" htmlFor="relevantInfo">
                Relevant shipping information
              </label>
              <textarea
                className="textarea min-h-20 resize-none"
                id="relevantInfo"
                placeholder="Back door, ring the bell, etc."
              ></textarea>
              <span className="success-message">Looks good!</span>
            </div>
 

          {/* Personal Info */}
          <div className="w-full">
            <h6 className="text-lg font-semibold">Personal Info</h6>
            <hr className="mb-4 mt-2" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label label-text" htmlFor="userProfile">
                Profile Pic
              </label>
              <input id="userProfile" type="file" className="input" required />
              <span className="error-message">Please select the file</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text" htmlFor="jsPickr">
                DOB
              </label>
              <input
                id="jsPickr"
                type="text"
                className="input"
                placeholder="YYYY-MM-DD"
                required
              />
              <span className="error-message">Please select your DOB</span>
              <span className="success-message">Looks good!</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label label-text" htmlFor="userCountry">
                Pick your Country
              </label>
              <select
                className="select"
                id="userCountry"
                aria-label="Select Country"
                required
              >
                {/* Add country options here */}
              </select>
              <span className="error-message">Please select your country</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <div className="label label-text">Gender</div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="male"
                  name="radio-0"
                  className="radio radio-primary"
                  required
                />
                <label className="label label-text text-base" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="female"
                  name="radio-0"
                  className="radio radio-primary"
                  required
                />
                <label className="label label-text text-base" htmlFor="female">
                  Female
                </label>
              </div>
              <span className="error-message">Please select your Gender</span>
              <span className="success-message">Looks good!</span>
            </div>
          </div>
          <div className="w-full">
            <label className="label label-text" htmlFor="userBio">
              Bio
            </label>
            <textarea
              className="textarea min-h-20 resize-none"
              id="userBio"
              placeholder="Hello!!!"
              required
            ></textarea>
            <span className="error-message">Please write few words</span>
            <span className="success-message">Looks good!</span>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="userSwitch"
                className="switch switch-primary"
                required
              />
              <label className="label text-base" htmlFor="userSwitch">
                Send me related emails
              </label>
            </div>
            <span className="error-message">Please select your preference</span>
            <span className="success-message">Looks good!</span>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                id="userAgre"
                required
              />
              <label className="label text-base" htmlFor="userAgre">
                <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="underline">
                   Agree to our terms and conditions
                </a>
              </label>
            </div>
            <span className="error-message">Please confirm our T&C</span>
            <span className="success-message">Looks good!</span>
          </div>

          {/* Email and Password */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label label-text" htmlFor="userEmail">
                Email
              </label>
              <input
                id="userEmail"
                type="email"
                className="input"
                placeholder="john@gmail.com"
                aria-label="john@gmail.com"
                required
              />
              <span className="error-message">Please enter a valid email</span>
              <span className="success-message">Looks good!</span>
            </div>
            <div>
              <label className="label label-text" htmlFor="userPassword">
                Password
              </label>
              <div className="input-group">
                <input
                  id="userPassword"
                  type="password"
                  className="input"
                  placeholder="Enter password"
                  required
                />
                <span className="input-group-text">
                  <button
                    type="button"
                    data-toggle-password='{ "target": "#userPassword" }'
                    className="block"
                  >
                    <span className="icon-[tabler--eye] text-base-content/80 password-active:block hidden size-4 flex-shrink-0"></span>
                    <span className="icon-[tabler--eye-off] text-base-content/80 password-active:hidden block size-4 flex-shrink-0"></span>
                  </button>
                </span>
              </div>
              <span className="error-message">Please enter a valid password</span>
              <span className="success-message">Looks good!</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button type="submit" name="submitButton" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;