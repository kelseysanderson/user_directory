import React from "react";

// need employee name (first/last), phone number, email, picture

function columnHeaders(props) {
  return (

      <thead>
          <th scope="col"></th>
          <th scope="col">
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span className="header-text">Name</span>
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">

                <li><a href="#">Sort A-Z</a></li>
                <li><a href="#">Sort Z-A</a></li>
              </ul>
            </div>
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
      </thead>
    // <div className="container">
    //   <div id="column-header" className="row justify-content-between">
    //     <div className="col-offset-4"></div>
    //     <div className="dropdown">
    //       <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    //         <span className="header-text">Name</span>
    //         <span className="caret"></span>
    //       </button>
    //       <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
    //         <li><span className="header-text">List One</span></li>
    //         {/* <li><a href="#">Sort A-Z</a></li>
    //         <li><a href="#">Sort Z-A</a></li> */}
    //       </ul>
    //     </div>
    //     <p><span className="header-text">Email</span></p>
    //     <p><span id="phone-number" className="header-text">Phone</span></p>
    //   </div>
    // </div>
  )
}


export default columnHeaders;
