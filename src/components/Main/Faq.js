import React from "react";

export default function Faq() {
  return (
    <div class="stuff">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="faq">
              <div class="faq_title">Faq & Stuff</div>
              <div class="faq_subtitle">read all about it</div>
              <div class="elements_accordions">
                <div class="accordions">
                  <div class="accordion_container">
                    <div class="accordion d-flex flex-row align-items-center active">
                      <div>Maecenas fermentum tortor id fringilla molestie.</div>
                    </div>
                    <div class="accordion_panel">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit.
                          Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem
                          maximus consectetur adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion_container">
                    <div class="accordion d-flex flex-row align-items-center">
                      <div>
                        Duis quis lacinia elit. Etiam varius mi eget lacus ultricies elementum
                      </div>
                    </div>
                    <div class="accordion_panel">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit.
                          Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem
                          maximus consectetur adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion_container">
                    <div class="accordion d-flex flex-row align-items-center">
                      <div>Maecenas fermentum tortor id fringilla molestie.</div>
                    </div>
                    <div class="accordion_panel">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit.
                          Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem
                          maximus consectetur adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="news">
              <div class="news_title">Latest News</div>
              <div class="news_subtitle">read all about it</div>
              <div class="news_container">
                <div class="latest d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="latest_image">
                      <img src="health/images/latest_1.jpg" alt="" />
                    </div>
                  </div>
                  <div class="latest_content">
                    <div class="latest_title">
                      <a href="news.html">A simple blog post</a>
                    </div>
                    <div class="latest_info">
                      <ul class="d-flex flex-row align-items-start justify-content-start">
                        <li>
                          <a href="#">by Jane Smith</a>
                        </li>
                        <li>
                          <a href="#">April 25, 2018</a>
                        </li>
                      </ul>
                    </div>
                    <div class="latest_comments">
                      <a href="#">2 Comments</a>
                    </div>
                  </div>
                </div>

                <div class="latest d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="latest_image">
                      <img src="health/images/latest_2.jpg" alt="" />
                    </div>
                  </div>
                  <div class="latest_content">
                    <div class="latest_title">
                      <a href="news.html">A new way to see things in medicine</a>
                    </div>
                    <div class="latest_info">
                      <ul class="d-flex flex-row align-items-start justify-content-start">
                        <li>
                          <a href="#">by Jane Smith</a>
                        </li>
                        <li>
                          <a href="#">April 25, 2018</a>
                        </li>
                      </ul>
                    </div>
                    <div class="latest_comments">
                      <a href="#">2 Comments</a>
                    </div>
                  </div>
                </div>

                <div class="latest d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="latest_image">
                      <img src="health/images/latest_3.jpg" alt="" />
                    </div>
                  </div>
                  <div class="latest_content">
                    <div class="latest_title">
                      <a href="news.html">Why is Pharma industry so big?</a>
                    </div>
                    <div class="latest_info">
                      <ul class="d-flex flex-row align-items-start justify-content-start">
                        <li>
                          <a href="#">by Jane Smith</a>
                        </li>
                        <li>
                          <a href="#">April 25, 2018</a>
                        </li>
                      </ul>
                    </div>
                    <div class="latest_comments">
                      <a href="#">2 Comments</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
