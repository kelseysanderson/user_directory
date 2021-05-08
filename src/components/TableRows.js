import React from "react";
import "../styles/tablerows.css"

// need employee name (first/last), phone number, email, picture

function TableRows(props) {
  return (
      <tbody>
        <tr>
          <td className="align-middle"><img src={props.image} alt="user-profile" /></td>
          <td className="align-middle">{props.firstName} {props.lastName}</td>
          <td className="align-middle">{props.phone}</td>
          <td className="align-middle">{props.email}</td>
        </tr>
      </tbody>
)}


export default TableRows;
