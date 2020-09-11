import React from "react";

export default function Info(props) {
  return (
    <>
      <div class="info">
        <div class="container">
          <div class="row row-eq-height">
            <div class="col-lg-4 info_box_col">
              <div class="info_box">
                <div class="info_image">
                  <img src="assets/images/info_1.jpg" alt="" />
                </div>
                <div class="info_content">
                  <div class="info_title">Free Consultations</div>
                  <div class="info_text">
                    Arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor,
                    eros a egestas finibus, dolor risus mollis.
                  </div>
                  <div class="button info_button">
                    <a href="#">
                      <span>read more</span>
                      <span>read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 info_box_col">
              <div class="info_box">
                <div class="info_image">
                  <img src="assets/images/info_2.jpg" alt="" />
                </div>
                <div class="info_content">
                  <div class="info_title">Emergency Care</div>
                  <div class="info_text">
                    Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer
                    tempor, eros a egestas finibus, dolor risus.
                  </div>
                  <div class="button info_button">
                    <a href="#">
                      <span>read more</span>
                      <span>read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 info_box_col">
              <div class="info_form_container">
                <div class="info_form_title">Make an Appointment</div>
                <form action="#" class="info_form" id="info_form">
                  <select
                    name="info_form_dep"
                    id="info_form_dep"
                    class="info_form_dep info_input info_select"
                  >
                    <option>Department</option>
                    <option>Department</option>
                    <option>Department</option>
                  </select>
                  <select
                    name="info_form_doc"
                    id="info_form_doc"
                    class="info_form_doc info_input info_select"
                  >
                    <option>Doctor</option>
                    <option>Doctor</option>
                    <option>Doctor</option>
                  </select>
                  <input type="text" class="info_input" placeholder="Name" required="required" />
                  <input type="text" class="info_input" placeholder="Phone No" />
                  <button class="info_form_button">make an appointment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cta">
        <div
          class="parallax_background parallax-window"
          data-parallax="scroll"
          data-image-src="assets/images/cta_1.jpg"
          data-speed="0.8"
        ></div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="cta_container d-flex flex-xl-row flex-column align-items-xl-start 
              align-items-center justify-content-xl-start justify-content-center">
                <div class="cta_content text-xl-left text-center">
                  <div class="cta_title">
                    Make an appointment with one of our professional Doctors.
                  </div>
                  <div class="cta_subtitle">
                    Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer
                    tempor, eros a egestas.
                  </div>
                </div>
                <div class="button cta_button ml-xl-auto">
                  <a href="#">
                    <span>call now</span>
                    <span>call now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
