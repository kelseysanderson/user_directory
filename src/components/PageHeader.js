import React from "react";
import "../styles/pageheader.css"
// need employee name (first/last), phone number, email, picture

function pageHeader(props) {
  return (
    <div className="jumbotron">
        <h1 className="display-4">User Directory</h1>
    </div>
  )
}


export default pageHeader;
