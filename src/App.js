import React from "react";
import Wrapper from "../src/components/Wrapper"
import PageHeader from "../src/components/PageHeader"
import TableData from "./components/TableData"
import TableHeader from "../src/components/TableHeader"
import TableRows from "../src/components/TableRows"
import "./App.css"

function App() {
  return (
  <div className="body">
    <Wrapper>
      <PageHeader/>
      <TableData/>
    </Wrapper>
  </div>
  )
}

export default App;
