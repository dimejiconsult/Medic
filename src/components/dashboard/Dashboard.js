import React from 'react';
import { withRouter } from "react-router-dom";
import './dashboard.css'

export const Dashboard = (props) => {
    
    return (
        <>
        <div class="dash-container">
            <header class="dash-header" id="header">
                <header class="slide_header">
                    <div class="head">
                        <img src="./images/demeji.jpg" height="55px" width="80px"/>
                    </div>
                </header>
            <h3>MENU</h3>
            </header>
            <div class="sidebar">
                <a href=""><p class="first_slide
                    -item"> Dashboard</p>
                    </a>
                <a href=""> Doctor Report</a>
                <a href="">Benefits </a>
                <a href="">Loans</a>
                <a href="">Referral</a>
                <a href="">My Profile</a>
                <a href="">Shop</a>
                <a href="">Shop Transactions</a>
                <a href="">Talk to a Doctor</a>
                <a href="">Find Hospital</a>
            </div>
            <div class="content_div"> 
                <div class="content" id="content">
                    <p class="title">Complete Registration</p>
                    <p class="sub_title">Please,Complete Registration to Proceed.</p>
                    <p class="reg_info">Step Personal
                        <br/>
                        Personal Information</p>
                        <p class="reg_info2">Step Address
                            <br/>
                            Address
                        </p>
                        <div class="form_firstname">
                            <div class="firstname">
                              <label for="firstname">First Name</label>
                             </div>
                            <input name="firstname" type="text" placeholder="First Name" required/>
                        </div>
                        <div class="form_gender">
                              <div class="gender">
                                <label for="gender">Gender</label>
                              </div>
                          {/* <select name="gender"   aria-placeholder="Select Gender" required/>
                              <option value="">--select a gender--</option>
                              <option value="">Male</option>
                              <option value="">Female</option>
                          </select> */}
                      </div>
                        <div class="form_lastname">
                            <div class="lastname">
                              <label for="lastname">Last Name</label>
                            </div>
                            <input name="lastname" type="text" placeholder="Last Name" required/>
                        </div>
                </div>
                    <div>
                        <footer class="footer"> rights reserved.</footer>
                    </div>
                  
            </div>
        </div>
        </>
    )
}
