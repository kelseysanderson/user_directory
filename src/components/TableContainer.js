import React from "react";
import TableHeader from "./TableHeader"
import TableRows from "./TableRows"

function Table(props) {
    return (
    <table className="table">
        <TableHeader/>
        {props.users.map(user => (
          <TableRows  
          key={user.phone}
          image={user.picture.medium}
          firstName={user.name.first}
          lastName={user.name.last}
          phone={user.phone}
          email={user.email}
          />
        ))}
    </table>
  )}
  
  
  export default Table;
  