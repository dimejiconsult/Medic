import React from 'react'

export default function FooterTop() {
    return (
        <>
        {/* <div
        class="parallax_background parallax-window"
        data-parallax="scroll"
        data-image-src="assets/images/footer.jpg"
        data-speed="0.8"
      ></div> */}
      <div class="footer_content">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 footer_col">
              <div class="footer_about">
                <div class="footer_about_text">
                  Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec
                  malesuada lorem maximus mauris.
                </div>
                <div class="footer_social">
                  <ul class="d-flex flex-row align-items-center justify-content-start">
                    <li>
                      <a href="#">
                        <i class="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-behance" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="copyright">
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All
                  rights reserved | Designed with
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://hudehtech.com" target="_blank">
                    with <i class='fa fa-heart-o'></>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 footer_col">
              <div class="footer_hours">
                <div class="footer_hours_title">Opening Hours</div>
                <ul class="hours_list">
                  <li class="d-flex flex-row align-items-center justify-content-start">
                    <div>Monday – Thursday</div>
                    <div class="ml-auto">8.00 – 19.00</div>
                  </li>
                  <li class="d-flex flex-row align-items-center justify-content-start">
                    <div>Friday</div>
                    <div class="ml-auto">8.00 - 18.30</div>
                  </li>
                  <li class="d-flex flex-row align-items-center justify-content-start">
                    <div>Saturday</div>
                    <div class="ml-auto">9.30 – 17.00</div>
                  </li>
                  <li class="d-flex flex-row align-items-center justify-content-start">
                    <div>Sunday</div>
                    <div class="ml-auto">9.30 – 15.00</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
