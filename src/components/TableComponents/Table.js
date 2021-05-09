import React from "react";
import TableRows from "./TableRows"
import "./table.css"



// need employee name (first/last), phone number, email, picture

function Table(props) {
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table" >

          <thead>
            <tr>
              <th scope="col"></th>

              <th scope="col" className="align-middle header-text">Name<button className="btn my-2 my-sm-0" id="sort-btn" onClick={e => props.toggleSortName(e, props.state)}>{props.sortBtnText}</button></th>

              <th scope="col" className="align-middle header-text">Phone</th>
              <th scope="col" className="align-middle header-text">Email</th>
              <th scope="col" className="align-middle header-text">Birthday</th>
            </tr>
          </thead>
          {props.users.map(user => (
            <TableRows
              key={user.phone}
              image={user.picture.medium}
              firstName={user.name.first}
              lastName={user.name.last}
              phone={user.phone}
              email={user.email}
              birthday={user.dob.date}
            />
          ))}
        </table>
      </div>
    </div>
  )
}


export default Table;
