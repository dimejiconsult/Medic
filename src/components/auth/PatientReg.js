import React from "react";

export const PatientReg = (props) => {
  return (
    <>
      <div class="patient_container">
        <div class="patient_svg_img">
          <img src="../../assets/images/patient-reg.svg" height="275px" width="375px" alt="patient_svg" />
          <h3 class="patient_images_note">
            Medflit is a convenient and affordable telemedicine platform that allows you to talk to
            a board-certified doctor by phone or video.
          </h3>
        </div>
        <div class="patient_register_form">
          <div class="patient_register_buttons">
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
          <div class="patient_register_title">
            <h3>Register as patient</h3>
            <p>Kindly fill in your details to proceed.</p>
          </div>
          <div class="patient_register_details">
            <form>
              <div class="patient_form_email">
                <div class="patient_form_label">
                  <label for="patient_email">Email*</label>
                </div>
                <input name="patient_email" type="text" placeholder="you@example.com" required />
              </div>

              <div class="patient_form_username_phone">
                <div class="patient_form_username">
                  <div class="patient_form_label">
                    <label for="patient_username">Username*</label>
                  </div>
                  <input name="patient_username" type="text" placeholder="Johndee" required />
                </div>
                <div class="patient_form_phone">
                  <div class="patient_form_label">
                    <label for="patient_phone">Phone Number*</label>
                  </div>
                  <input name="patient_phone" type="text" placeholder="+234" required />
                </div>
              </div>

              <div class="patient_form_password">
                <div class="patient_form_label">
                  <label for="patient_password">Password*</label>
                </div>
                <input name="patient_password" type="password" required />
              </div>

              <div class="patient_form_cpassword">
                <div class="patient_form_label">
                  <label for="patient_cpassword">Confirm Password*</label>
                </div>
                <input name="password" type="password" required />
              </div>

              <div class="patient_form_checkbox">
                <input name="checkbox" type="checkbox" required />
                <p for="checkbox">
                  I have read the
                  <a href="/" target="_blank">
                    {" "}
                    terms and conditions
                  </a>
                  , i hereby agree.
                </p>
              </div>
              <div class="patient_form_button">
                <button>Register</button>
                <div class="patient_sign-in">
                  <p href="" target="_blank">
                    Are you a registered user?{" "}
                    <a class="patient_color" href="/">
                      Sign In
                    </a>{" "}
                    Here
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className='Login_layout_footer'>DimejiConsult @ 2020</footer>
    </>
  );
};
