import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="App">
      <div class="super_container">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
