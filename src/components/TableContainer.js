import React, { Component } from "react";
import Filter from "./Filter";
import Table from "./Table";
import API from "../utils/API";

class TableContainer extends Component {
  state = {
    sortBy: "",
    sort: "",
    filterBy: "",
    filter: "",
    users: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.default()
    .then(res => console.log(res)) //this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  }

  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Filter/>
        <div></div>
        <Table/>
      </div>
    );
  }
}

export default TableContainer;
