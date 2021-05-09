import React from "react";
import Moment from 'react-moment';

// need employee name (first/last), phone number, email, picture
function TableRows(props) {
  return (
    <tbody>
      <tr>
        <td className="align-middle table-data" id="image"><img src={props.image} alt="user-profile" /></td>
        <td className="align-middle table-data">{props.lastName}, {props.firstName}</td>
        <td className="align-middle table-data">{props.phone}</td>
        <td className="align-middle table-data">{props.email}</td>
        <td className="align-middle table-data" id="dob"><Moment format="MM/DD/YYYY">{props.birthday}</Moment></td>
      </tr>
    </tbody>
  )
}

export default TableRows;
