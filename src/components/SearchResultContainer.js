import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeRow from "./EmployeeRow";
import ColumnHeaders from "./ColumnHeaders";
import PageHeader from "./PageHeader"
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
        <PageHeader/>
        <SearchForm 
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <table className="table">
          <ColumnHeaders/>
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
        </table>
      </div>
    );
  }
}

export default SearchResultContainer;
