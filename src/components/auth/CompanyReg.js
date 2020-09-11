import React from "react";

export const CompanyReg = () => {
  return (
    <>
      <div class="company_container">
        <div class="company_svg_img">
          <img src="../../assets/images/company.svg" height="375px" width="375px" alt="company_svg" />
          <h4 class="company_images_note">
            We welcome schools, companies, organizations to take advantage of telemedicine software
            and use it for their respective businesses. Kindly sign up here.
          </h4>
        </div>
        <div class="company_register_form">
          <div class="company_buttons">
            <button class="patient_register_doctor">
              <a style={{ textDecoration: "none", color: "#ffffff" }} href="/login-signup/doctor">
                Doctor
              </a>
            </button>
            <button class="patient_register_patient">
              <a style={{ textDecoration: "none", color: "#ffffff" }} href="/login-signup/register">
                Patient
              </a>
            </button>
            <button class="patient_register_company">
              <a style={{ textDecoration: "none", color: "#ffffff" }} href="/login-signup/company">
                Company
              </a>
            </button>
          </div>
          <h3 class="company_title">Register as company</h3>
          <p class="company_subtitle">Kindly fill in your details to proceed.</p>
          <form class="company_form_info">
            <div class="company_details">
              <h3>Company Details</h3>
                <label for="company_name">Company_Name</label>
              <div class="company_form_name">
                <input name="company_name" type="text" placeholder="Company's Name" required />
              </div>
                <label for="form_phone">Company Number</label>
              <div class="company_form_phone">
                <div class="company_form_country_phone">
                  <select>
                    <option>1</option>
                  </select>
                  <input name="company_form_phone" type="text" placeholder="+234" required />
                </div>
              </div>
                <label for="company_email">Company Email</label>
              <div class="company_form_email">
                <input name="company_email" type="email" placeholder="you@example.com" required />
              </div>
                <label for="company_service">Services</label>
              <div class="company_form_service">
                <input
                  name="company_services"
                  type="text"
                  placeholder="Company' Services"
                  required
                />
              </div>
                <label for="company_address">Address</label>
              <div class="company_form_address">
                <textarea
                  name="company_address"
                  type="text"
                  placeholder="Company's Address"
                  required
                />
              </div>
                <label for="company_staff">Country</label>
              <div class="company_form_staff">
                <select name="company_staff">
                  <option value="">Select</option>
                  <option value="">0-50</option>
                  <option value="">51-100</option>
                  <option value="">101-150</option>
                  <option value="">151-200</option>
                  <option value="">200 above</option>
                </select>
              </div>
                <label for="company_country">Country</label>
              <div class="company_form_country">
                <select name="company_country">
                  <option value="">--select a country--</option>
                  <option value="">Nigeria</option>
                  <option value="">America</option>
                  <option value="">Others</option>
                </select>
              </div>
                <label for="company_state">State</label>
              <div class="company_form_state">
                <select name="company_state">
                  <option value=""></option>
                  <option value="">Lagos</option>
                  <option value="">Oyo</option>
                  <option value="">Ogun</option>
                </select>
              </div>
                <label for="company_city">City</label>
              <div class="company_form_city">
                <select name="company_city">
                  <option value=""></option>
                  <option value="">Lagos</option>
                  <option value="">Boluwadro</option>
                  <option value="">Magodo</option>
                </select>
              </div>
                <label for="company_username">Username</label>
              <div class="company_form_username">
                <input name="company_username" type="text" placeholder="Johndee" required />
              </div>
                <label for="password">Password</label>
              <div class="company_form_password">
                <input name="password" type="password" required />
              </div>
                <label for="company_cpassword">Confirm Password</label>
              <div class="company_form_cpassword">
                <input name="company_password" type="password" required />
              </div>
            </div>
            {/* contact detail form block */}
            <div class="company_contact_details">
              <h3 class="contact_title">Contact Person</h3>
                <label for="contact_firstname">First Name</label>
              <div class="company_contact_firstname">
                <input name="contact_firstname" type="text" placeholder="John" required />
              </div>
                <label for="contact_lastname">Last Name</label>
              <div class="company_contact_lastname">
                <input name="contact_lastname" type="text" placeholder="Dee" required />
              </div>
              <div class="company_contact_phone">
                <label for="contact_phone">Phone Number</label>
                <div class="company_contact_country_phone">
                  <select>
                    <option>1</option>
                  </select>
                  <input name="contact_phone" type="text" placeholder="+234" required />
                </div>
              </div>
              <div class="company_contact_checkbox">
                <input name="contact_checkbox" type="checkbox" required />
                <p>
                  I have read the
                  <a href="/" target="_blank">
                    {" "}
                    T & C,
                  </a>
                  i hereby agree
                </p>
              </div>
              <div class="company_submit_btn">
                <button>Register</button>
              </div>
              <div class="users_sign-in_link">
                <p href="" target="_blank">
                  Are you a registered user? <a href="/">Sign In</a> Here
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className='Login_layout_footer'>DimejiConsult @ 2020</footer>
    </>
  );
};
