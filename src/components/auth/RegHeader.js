import React from 'react';

export const RegHeader = () => {
    return (
        <>
        <div className="layout_header">
          <div className="nav-link-home">
            <ul>
              <li>
                <a style={{ textDecoration: "none", color: "#ffffff" }} href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <a style={{ textDecoration: "none", color: "#ffffff" }} href='/login-signup'>
                  Login
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#ffffff" }} href='/login-signup/register'>
                  Register
                </a>
              </li>
            </ul>
          </div>
          </div>
        </>
    )
}