import React from "react";
import { Link } from "react-router-dom";

export const DoctorReg = (props) => {
  return (
    <>
      <div class="doctor_container">
        <div class="doctor_svg_img">
          <img src="../../assets/images/hospital_doctor.svg" height="375px" width="375px" alt="doctor_svg" />
          <h4 class="doctor_image_note">
            This page is for doctors sign up as family medicine, dermatologists, cardiologists, and
            other medical specialists.
          </h4>
        </div>
        <div class="doctor_form">
          <div class="doctor_buttons">
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
          <h3 class="doctor_title">Register as Doctor</h3>
          <p class="doctor_subtitle">Kindly fill in your details to proceed.</p>
          <form className="doctor_form_info">
            <div class="doctor_details">
              <h3>Personal Details</h3>
                <label for="doctor_firstname">FirstName</label>
              <div class="doctor_firstname">
                <input name="doctor_firstname" type="text" placeholder="John" required />
              </div>
                <label for="doctor_lastname">LastName</label>
              <div class="doctor_lastname">
                <input name="doctor_lastname" type="text" placeholder="Dee" required />
              </div>
                <label for="doctor_gender">Gender</label>
              <div class="doctor_gender">
                <select name="doctor_gender">
                  <option value="" selected disabled hidden>
                    --select a gender--
                  </option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
                <label for="doctor_email">Email</label>
              <div class="doctor_email">
                <input name="doctor_email" type="text" placeholder="you@example.com" required />
              </div>
                <label for="doctor_phone">PhoneNumber</label>
              <div class="doctor_phone">
                <div class="doctor_country_phone">
                  <select>
                    <option>+122</option>
                  </select>
                  <input name="doctor_phone" type="text" placeholder="+234" required />
                </div>
              </div>
                <label for="doctor_address">Address</label>
              <div class="doctor_address">
                <textarea
                  name="doctor_address"
                  type="textarea"
                  placeholder="Doctor's Address"
                  required
                />
              </div>
                <label for="doctor_country">Country</label>
              <div class="doctor_country">
                <select name="country">
                  <option value="" selected disabled hidden>
                    --select a country--
                  </option>
                  <option value="">Nigeria</option>
                  <option value="">America</option>
                  <option value="">Others</option>
                </select>
              </div>
                <label for="doctor_username">Username</label>
              <div class="doctor_username">
                <input name="doctor_username" type="text" placeholder="Johndee" required />
              </div>
                <label for="doctor_password">Password</label>
              <div class="doctor_password">
                <input name="doctor_password" type="password" id="myPsw" required />
              </div>

                <label for="doctor_cpassword">Confirm Password</label>
              <div class="doctor_cpassword">
                <input name="doctor_password" type="password" id="myPsw" required />
              </div>
            </div>
            <div class="doctor_professiond">
              <h3>Professional Informations</h3>
                <label for="doctor_profession">Profession</label>
              <div class="doctor_profession">
                <select name="doctor_profession">
                  <option value="" selected disabled hidden>
                    --select a profession--
                  </option>
                  <option value="">Medical Doctor</option>
                  <option value="">Registered Nurse</option>
                  <option value="">Others</option>
                </select>
              </div>
                <label for="doctor_hospital">Hospital Name</label>
              <div class="doctor_hospital">
                <input name="doctor_hospital" type="text" placeholder="e.g.Hospital" required />
              </div>
                <label for="doctor_id">License ID Number</label>
              <div class="doctor_id">
                <input name="doctor_id" type="text" placeholder="License ID" required />
              </div>
                <label for="date_issue">License Issued Date</label>
              <div class="doctor_issue">
                <input name="date_issue" type="date" required />
              </div>
                <label for="date_issue_e">License Issued Date</label>
              <div class="doctor_issue_e">
                <input name="date_issue_e" type="date" required />
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className='Login_layout_footer'>DimejiConsult @ 2020</footer>
    </>
  );
};
