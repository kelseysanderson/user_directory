import React from "react";

// need employee name (first/last), phone number, email, picture

function ResultList(props) {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-12"></div>
        <img src= {props.image} alt="user profile" />
        <p>{props.firstName} {props.lastName}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
)}


export default ResultList;
