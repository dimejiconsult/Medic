import React from 'react'
import {Link} from 'react-router-dom'
export default function DoctorReg() {
    return (
        <>
          <div class="doctor_container">
            <div class="doctor_svg_img">
              <img src="health/images/hospital_doctor.svg" height="375px" width="375px" />
              <h4 class="doctor_image_note">
                This page is for doctors sign up as family medicine, dermatologists, cardiologists, and
                other medical specialists.
              </h4>
            </div>
            <div class="doctor_form">
              <div class="doctor_buttons">
                <button class="patient_register_doctor"><Link to='/register/doctor'>Doctor</Link></button>
                <button class="patient_register_patient"><Link  to='/register'>Patient</Link></button>
                <button class="patient_register_company"><Link  to='/register/company'>Company</Link></button>
              </div>
              <h3 class="doctor_title">Register as Doctor</h3>
              <p class="doctor_subtitle">Kindly fill in your details to proceed.</p>
              <form className="doctor_form_info">
                <div class="doctor_details">
                  <h3>Personal Details</h3>
                  <div class="doctor_firstname">
                    <label for="doctor_firstname">FirstName</label>
                    <input name="doctor_firstname" type="text" placeholder="John" required />
                  </div>
                  <div class="doctor_lastname">
                    <label for="doctor_lastname">LastName</label>
                    <input name="doctor_lastname" type="text" placeholder="Dee" required />
                  </div>
                  <div class="doctor_gender">
                    <label for="doctor_gender">Gender</label>
                    <select name="doctor_gender" aria-placeholder="Select Gender">
                      <option value="" selected disabled hidden>
                        --select a gender--
                      </option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
                  </div>
                  <div class="doctor_email">
                    <label for="doctor_email">Email</label>
                    <input name="doctor_email" type="text" placeholder="you@example.com" required />
                  </div>
                  <div class="doctor_phone">
                    <label for="doctor_phone">PhoneNumber</label>
                    <div class="doctor_country_phone">
                      <select>
                        <option>+122</option>
                      </select>
                      <input name="doctor_phone" type="text" placeholder="+234" required />
                    </div>
                  </div>
                  <div class="doctor_address">
                    <label for="doctor_address">Address</label>
                    <textarea
                      name="doctor_address"
                      type="textarea"
                      placeholder="Doctor's Address"
                      required
                    />
                  </div>
                  <div class="doctor_country">
                    <label for="doctor_country">Country</label>
                    <select name="country" aria-placeholder="--Select Country--">
                      <option value="" selected disabled hidden>
                        --select a country--
                      </option>
                      <option value="">Nigeria</option>
                      <option value="">America</option>
                      <option value="">Others</option>
                    </select>
                  </div>
                  <div class="doctor_username">
                    <label for="doctor_username">Username</label>
                    <input name="doctor_username" type="text" placeholder="Johndee" required />
                  </div>
                  <div class="doctor_password">
                    <label for="doctor_password">Password</label>
                    <input name="doctor_password" type="password" id="myPsw" required />
                  </div>
    
                  <div class="doctor_cpassword">
                    <label for="doctor_cpassword">Confirm Password</label>
                    <input name="doctor_password" type="password" id="myPsw" required />
                  </div>
                </div>
                <div class="doctor_professiond">
                  <h3>Professional Informations</h3>
                  <div class="doctor_profession">
                    <label for="doctor_profession">Profession</label>
                    <select name="doctor_profession" aria-placeholder="--Select Profession--">
                      <option value="" selected disabled hidden>
                        --select a profession--
                      </option>
                      <option value="">Medical Doctor</option>
                      <option value="">Registered Nurse</option>
                      <option value="">Others</option>
                    </select>
                  </div>
                  <div class="doctor_hospital">
                    <label for="doctor_hospital">Hospital Name</label>
                    <input name="doctor_hospital" type="text" placeholder="e.g.Hospital" required />
                  </div>
                  <div class="doctor_id">
                    <label for="doctor_id">License ID Number</label>
                    <input name="doctor_id" type="text" placeholder="License ID" required />
                  </div>
                  <div class="doctor_issue">
                    <label for="date_issue">License Issued Date</label>
                    <input name="date_issue" type="date" required />
                  </div>
                  <div class="doctor_issue_e">
                    <label for="date_issue_e">License Issued Date</label>
                    <input name="date_issue_e" type="date" required />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      );
}
