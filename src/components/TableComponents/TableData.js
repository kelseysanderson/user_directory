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
    sortAtoZ: true
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
      });
  }

  toggleSortName(e) {
    console.log("MADE IT")
    const { results } = this.state;
    let newResults = results
    if (this.state.sortAtoZ) {
      newResults.sort((a, b) => a.name.last > b.name.last)
    } else {
      newResults.sort((a, b) => a.name.last < b.name.last)
    }
    this.setState({
      sortAsc: !this.state.sortAsc,
      results: newResults
    })
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          results={this.state.results}
        />
        <Table
          toggleSortName={this.toggleSortName}
          sortAsc={this.sortAsc}
          users={this.state.filteredResults}
        />
      </div>
    );
  }
}

export default TableData;
