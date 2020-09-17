import React from "react";

export default function Search() {
  return (
    <>
     <div className="select_search">
             <div
        class="background_image"
        style={{ backgroundImage: "url(assets/images/cta_1.jpg)" }}
      ></div>
      <div>
        <div className='select_search_title'>
        Make an appointment with one of our professional Doctors.
        </div>
        <div class="select_drop">
          <div class="form_group">
            <select class="form-control input-lg">
              <option value="" selected disabled hidden>
                Option 1
              </option>
              <option value="option-2">Option 2</option>
              <option value="option-3">Option 3</option>
            </select>
            <i class="fa fa-chevron-down"></i>
          </div>
        </div>
      </div>

      <div>
        <button className='select_btn'>
          Search 
          <span style={{paddingLeft:'10px'}}className='fa fa-search'></span>
        </button>
      </div>
      </div>
    </>
  );
}
