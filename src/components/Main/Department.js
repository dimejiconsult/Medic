import React from "react";

export default function Department() {
  return (
    <div className="select_search">
      <div className="select_search_title">
        <h4>Feeling ill? Book a Doctor Now</h4>
      </div>
      <div class="select_drop">
      <div class="form_group">
        <select class="form-control input-lg">
          <option value="" selected disabled hidden>Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
        </select>
        <i class="fa fa-chevron-down"></i>
      </div>
      </div>
      <div className='select_btn'>
        <button>
        <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
