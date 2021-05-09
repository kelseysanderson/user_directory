import React from "react";
import "./searchform.css"

function SearchForm(props) {
  return (
    <div className="search-section">
      <form className="form-inline my-lg-0">
        <input 
          onChange={e=> props.handleInputChange(e)}
          value={props.search}
          className="form-control mr-sm-2" 
          name="search"
          type="text" 
          placeholder="Search" 
          id="search"
          aria-label="Search"
          />
        {/* <button className="btn my-2 my-sm-0" id="search-btn" type="submit">Search</button> */}
      </form>
    </div>
  );
}

export default SearchForm;
