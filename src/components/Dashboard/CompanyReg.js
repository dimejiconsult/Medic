import React from 'react'
import {Link} from 'react-router-dom'

export default function CompanyReg({match}) {
    return (
        <>
        <div class="company_container">
            <div class="company_svg_img">
                <img src="health/images/company.svg" height="375px" width="375px" />
                <h4 class="company_images_note">
                We welcome schools, companies, organizations to take advantage of telemedicine software
                and use it for their respective businesses. Kindly sign up here.
                </h4>
            </div>
            <div class="company_register_form">
                <div class="company_buttons">
                <button class="patient_register_doctor"><Link to='/register/doctor'>Doctor</Link></button>
                <button class="patient_register_patient"><Link  to='/register'>Patient</Link></button>
                <button class="patient_register_company"><Link  to='/register/company'>Company</Link></button>
                </div>
                <h3 class="company_title">Register as company</h3>
                <p class="company_subtitle">Kindly fill in your details to proceed.</p>
                <form class="company_form_info">
                        <div class="company_details">
                            <h3>Company Details</h3>
                            <div class="company_form_name">
                                <label for="company_name">Company_Name</label>
                                <input name="company_name" type="text" placeholder="Company's Name" required />
                            </div>
                            <div class="company_form_phone">
                                <label for="form_phone">Company Number</label>
                                <div class="company_form_country_phone">
                                    <select>
                                        <option>1</option>
                                    </select>
                                    <input name="company_form_phone" type="text" placeholder="+234" required/>
                                </div>
                            </div>
                            <div class="company_form_email">
                                <label for="company_email">Company Email</label>
                                <input name="company_email" type="email" placeholder="you@example.com" required />
                            </div>
                            <div class="company_form_service">
                                <label for="company_service">Services</label>
                                <input name="company_services" type="text" placeholder="Company' Services" required />
                            </div>
                            <div class="company_form_address">
                                <label for="company_address">Address</label>
                                <textarea name="company_address" type="text" placeholder="Company's Address" required />
                            </div>
                            <div class="company_form_staff">
                                <label for="company_staff">Country</label>
                                <select name="company_staff" aria-placeholder="--Select--">
                                    <option value="">Select</option>
                                    <option value="">0-50</option>
                                    <option value="">51-100</option>
                                    <option value="">101-150</option>
                                    <option value="">151-200</option>
                                    <option value="">200 above</option>
                                </select>
                            </div>
                            <div class="company_form_country">
                                <label for="company_country">Country</label>
                                <select name="company_country" aria-placeholder="--Select Country--">
                                    <option value="">--select a country--</option>
                                    <option value="">Nigeria</option>
                                    <option value="">America</option>
                                    <option value="">Others</option>
                                </select>
                            </div>
                            <div class="company_form_state">
                                <label for="company_state">State</label>
                                <select name="company_state" aria-placeholder="">
                                    <option value=""></option>
                                    <option value="">Lagos</option>
                                    <option value="">Oyo</option>
                                    <option value="">Ogun</option>
                                </select>
                            </div>
                            <div class="company_form_city">
                                <label for="company_city">City</label>
                                <select name="company_city" aria-placeholder="">
                                    <option value=""></option>
                                    <option value="">Lagos</option>
                                    <option value="">Boluwadro</option>
                                    <option value="">Magodo</option>
                                </select>
                            </div>
                            <div class="company_form_username">
                                <label for="company_username">Username</label>
                                <input name="company_username" type="text" placeholder="Johndee" required />
                            </div>
                            <div class="company_form_password">
                                <label for="password">Password</label>
                                <input name="password" type="password" required />
                            </div>
                            <div class="company_form_cpassword">
                                <label for="company_cpassword">Confirm Password</label>
                                <input name="company_password" type="password" required />
                            </div>
                        </div>
                        {/* contact detail form block */}
                        <div class="company_contact_details">
                            <h3 class="contact_title">Contact Person</h3>
                            <div class="company_contact_firstname">
                                <label for="contact_firstname">First Name</label>
                                <input name="contact_firstname" type="text" placeholder="John" required/>
                            </div>
                            <div class="company_contact_lastname">
                                <label for="contact_lastname">Last Name</label>
                                <input name="contact_lastname" type="text" placeholder="Dee" required/>
                            </div>
                            <div class="company_contact_phone">
                                <label for="contact_phone">Phone Number</label>
                                <div class="company_contact_country_phone">
                                    <select>
                                        <option>1</option>
                                    </select>
                                    <input name="contact_phone" type="text" placeholder="+234" required/>
                                </div>
                            </div>
                            <div class="company_contact_checkbox">
                                <input name="contact_checkbox" type="checkbox" required/>
                                <p>I have read the
                                <a href="" target="_blank"> T & C,</a>
                                    i hereby agree
                                </p>
                            </div>
                            <div class="company_submit_btn">
                                <button>Register</button>
                            </div>
                            <div class="users_sign-in_link">
                                <p href="" target="_blank">Are you a registered user? <a>Sign In</a> Here</p>
                            </div>
                        </div>
                </form>
            </div>
          </div>
        </>
      );
}
