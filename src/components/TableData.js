import React, { Component } from "react";
import SearchForm from "./SearchForm";
import TableContainer from "./TableContainer"
import API from "../utils/API";

class TableData extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: []
  };


  handleInputChange = (e) => {
    console.log("RESULTSSS:", this.state.results)
    this.setState({search: e.target.value})
    const filter = e.target.value;
    const filteredUsers = this.state.results.filter(user => {
      let values = Object.values(user)
      .join("")
      .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredResults: filteredUsers })
  }

  handleFormSubmit = event => {
   
    event.preventDefault();
    API.getRandomUsers(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  componentDidMount(query) {
    API.getRandomUsers()
      .then(res =>{
        this.setState({
            results: res.data.results,
            filteredResults: res.data.results,
        });
        console.log(this.state.results)
    });
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
        <TableContainer
          users={this.state.filteredResults}
        />
      </div>
    );
  }
}

export default TableData;
