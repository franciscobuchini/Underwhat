//CheckoutForm.jsx
import flatpickr from 'flatpickr';
const CheckoutForm = () => {

  window.addEventListener('load', function () {
    // Initialize flatpickr
    flatpickr('.jsPickr', {
      allowInput: true,
      monthSelectorType: 'static'
    })
  })

  return (
    <div class="bg-base-100 w-full rounded-lg shadow">
      <h5 class="bg-base-300 rounded-t-lg p-4 text-base text-xl font-bold">JS Validation</h5>
      <div class="w-full p-4">
        <form class="needs-validation peer grid gap-y-4" novalidate>
          {/* <!-- Account Details --> */}
          <div class="w-full">
            <h6 class="text-lg font-semibold">1. Shipping Details</h6>
            <hr class="mb-4 mt-2" />
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label class="label label-text" for="userCountry">Select Country *</label>
              <select class="select" id="userCountry" aria-label="select" required>
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
                <option value="korea_south">South Korea</option>
                <option value="liechtenstein">Liechtenstein</option>
                <option value="malaysia">Malaysia</option>
                <option value="namibia">Namibia</option>
                <option value="netherlands">Netherlands</option>
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
                <option value="spain">Spain</option>
                <option value="switzerland">Switzerland</option>
                <option value="tanzania">Tanzania</option>
                <option value="turkey">Turkey</option>
                <option value="turkmenistan">Turkmenistan</option>
                <option value="united_arab_emirates">United Arab Emirates</option>
                <option value="united_kingdom">United Kingdom</option>
                <option value="united_states">United States</option>
                <option value="united_states">Other...</option>
              </select>
              <span class="error-message">Please select your country</span>
              <span class="success-message">Looks good!</span>
            </div>
            <div>
              <label class="label label-text" for="firstName">First Name </label>
              <input id="firstName" type="text" placeholder="John" class="input" required />
              <span class="error-message">Please enter your name.</span>
              <span class="success-message">Looks good!</span>
            </div>
            <div>
              <label class="label label-text" for="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Doe" class="input" required />
              <span class="error-message">Please enter your last name.</span>
              <span class="success-message">Looks good!</span>
            </div>
          </div>
          {/* <!-- Email and password --> */}
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label class="label label-text" for="userEmail">Email</label>
              <input id="userEmail" type="email" class="input" placeholder="john@gmail.com" aria-label="john@gmail.com" required="" />
              <span class="error-message">Please enter a valid email</span>
              <span class="success-message">Looks good!</span>
            </div>
            <div>
              <label class="label label-text" for="userPassword">Password</label>
              <div class="input-group">
                <input id="userPassword" type="password" class="input" placeholder="Enter password" required />
                <span class="input-group-text">
                  <button type="button" data-toggle-password='{ "target": "#userPassword" }' class="block">
                    <span class="icon-[tabler--eye] text-base-content/80 password-active:block hidden size-4 flex-shrink-0" ></span>
                    <span class="icon-[tabler--eye-off] text-base-content/80 password-active:hidden block size-4 flex-shrink-0" ></span>
                  </button>
                </span>
              </div>
              <span class="error-message">Please enter a valid password</span>
              <span class="success-message">Looks good!</span>
            </div>
          </div>
          {/* <!-- Personal Info --> */}
          <div class="w-full">
            <h6 class="text-lg font-semibold">2. Personal Info</h6>
            <hr class="mb-4 mt-2" />
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label class="label label-text" for="userProfile">Profile Pic</label>
              <input id="userProfile" type="file" class="input" required />
              <span class="error-message">Please select the file</span>
              <span class="success-message">Looks good!</span>
            </div>
            <div>
              <label class="label label-text" for="jsPickr">DOB</label>
              <input id="jsPickr" type="text" class="input" placeholder="YYYY-MM-DD" required />
              <span class="error-message">Please select your DOB</span>
              <span class="success-message">Looks good!</span>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label class="label label-text" for="userCountry">Pick your Country</label>
              <select class="select" id="userCountry" aria-label="Select Country" required>


              </select>
              <span class="error-message">Please select your country</span>
              <span class="success-message">Looks good!</span>
            </div>
            <div>
              <div class="label label-text">Gender</div>
              <div class="flex items-center gap-2">
                <input type="radio" id="male" name="radio-0" class="radio radio-primary" required />
                <label class="label label-text text-base" for="male">Male</label>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" id="female" name="radio-0" class="radio radio-primary" required />
                <label class="label label-text text-base" for="female">Female</label>
              </div>
              <span class="error-message">Please select your Gender</span>
              <span class="success-message">Looks good!</span>
            </div>
          </div>
          <div class="w-full">
            <label class="label label-text" for="userBio">Bio</label>
            <textarea class="textarea min-h-20 resize-none" id="userBio" placeholder="Hello!!!" required=""></textarea>
            <span class="error-message">Please write few words</span>
            <span class="success-message">Looks good!</span>
          </div>
          <div>
            <div class="flex items-center gap-3">
              <input type="checkbox" id="userSwitch" class="switch switch-primary" required />
              <label class="label text-base" for="userSwitch">Send me related emails</label>
            </div>
            <span class="error-message">Please select your preference</span>
            <span class="success-message">Looks good!</span>
          </div>
          <div>
            <div class="flex items-center gap-3">
              <input type="checkbox" class="checkbox checkbox-primary" id="userAgre" required />
              <label class="label text-base" for="userAgre">Agree to our terms and conditions</label>
            </div>
            <span class="error-message">Please confirm our T&C</span>
            <span class="success-message">Looks good!</span>
          </div>
          {/* <!-- Submit button --> */}
        <div class="mt-4">
            <button type="submit" name="submitButton" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default CheckoutForm;