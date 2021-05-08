import React from "react";
import "../styles/employeerow.css"

// need employee name (first/last), phone number, email, picture

function ResultList(props) {
  return (
      <tbody>
        <tr>
          <th scope="row"><img src={props.image} alt="user-profile" /></th>
          <td>{props.firstName} {props.lastName}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
    // <div className="container">
    //   <div id="user-row" className="row justify-content-between">
    //     <div className="col-12"></div>
    //     <img src= {props.image} alt="user profile" />
    //     <p>{props.firstName} {props.lastName}</p>
    //     <p>{props.email}</p>
    //     <p id="phone-number">{props.phone}</p>
    //   </div>
    // </div>
)}


export default ResultList;
