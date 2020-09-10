import React from "react";

export default function Login() {
  return (
    <>
    <div class="login_container">
            <div class="svg_img">
                <img src="health/images/mobile-login.svg" height="375px" width="375px"/>
            </div>
              <div class="company_form">
                <h3 class="login">Login to your account</h3>
                <p class="p_login">Fill in your email and password to proceed</p>
              </div>
              <div class="login_email">
                <div class="email">
                <label for="email">Email/Username</label>
               </div>
                <input name="email" type="text" placeholder="you@example.com" required />
            </div>
            <div class="login_password">
                <div class="password">
                <label for="password">Password</label>
               </div>
                <input name="password" type="password" required />
            </div>
            <button class="login_button">LOGIN</button>
            <div className='login_note'>
              <p> <a href="" target="_blank">forget your password?</a></p> 
              <p class="account">Need an account? <a href="" target="_blank">Sign up</a></p> 
            </div>
        </div>
    </>
  );
}
