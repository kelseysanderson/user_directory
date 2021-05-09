import React, { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Table from "./Table"
import API from "../../utils/API";
import "./table.css"

class TableData extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: [],
    sortAtoZ: false
  };

  handleInputChange = (e) => {
    this.setState({ search: e.target.value })
    const filter = e.target.value;
    const filteredUsers = this.state.results.filter(user => {
      let values = Object.values(user)
        .join("")
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredResults: filteredUsers })
    console.log(this.state.filteredResults)
  }

  componentDidMount(query) {
    API.getRandomUsers()
      .then(res => {
        this.setState({
          results: res.data.results,
          filteredResults: res.data.results,
          sortAtoZ: true,
        });
        console.log(this.state.results)
      });

  }

  toggleSortName = (e) => {
    const { filteredResults } = this.state;
    let newResults = filteredResults
    if (this.state.sortAtoZ) {
      console.log("here")
      newResults.sort(function (a, b) {
        let n1 = a.name.last;
        let n2 = b.name.last;
        if (n1 < n2) { return -1 };
        if (n1 > n2) { return 1 };
        return 0;
      });
    } else {
      newResults.sort(function (a, b) {
        let n1 = a.name.last;
        let n2 = b.name.last;
        if (n1 < n2) { return 1 };
        if (n1 > n2) { return -1 };
        return 0;
      });
    }

    this.setState({
      sortAtoZ: !this.state.sortAtoZ,
      filteredResults: newResults
    })
  }

  render() {

    let sortBtnText = "";
    if (this.state.sortAtoZ) { sortBtnText = "A-Z" }
    else { sortBtnText = "Z-A" }

    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Table
          toggleSortName={this.toggleSortName}
          sortAsc={this.sortAsc}
          users={this.state.filteredResults}
          state={this.state}
          sortBtnText={sortBtnText}
        />
      </div>
    );
  }
}

export default TableData;
