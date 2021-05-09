import React from "react";
import TableHeader from "./Table"
import "./table.css"

function Table(props) {
  return (
    <div className="table-responsive">
      <TableHeader
        toggleSortName={props.toggleSortName}
        lastName={props.users.name.last}
      />
    </div>
  )
}


export default Table;
