import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeRow from "./EmployeeRow";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount(query) {
    API.getRandomUsers()
      .then(res =>{
        this.setState({
            results: res.data.results,
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
          />
        {this.state.results.map(user => (
          <EmployeeRow 
          key={user.phone}
          image={user.picture.medium}
          firstName={user.name.first}
          lastName={user.name.last}
          phone={user.phone}
          email={user.email}
          />
        ))}
      </div>
    );
  }
}

export default SearchResultContainer;
