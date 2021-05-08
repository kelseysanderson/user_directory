import React from "react";

// need employee name (first/last), phone number, email, picture

function TableRows(props) {
  return (
      <tbody>
        <tr>
          <td className="align-middle table-data"><img src={props.image} alt="user-profile" /></td>
          <td className="align-middle table-data">{props.firstName} {props.lastName}</td>
          <td className="align-middle table-data">{props.phone}</td>
          <td className="align-middle table-data">{props.email}</td>
        </tr>
      </tbody>
)}


export default TableRows;
