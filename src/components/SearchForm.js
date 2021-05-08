import React from "react";

function SearchForm(props) {
  return (
    <div className="search-section">
      <form className="form-inline my-2 my-lg-0">
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
        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
