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
    generatedUsers: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  async componentDidMount() {
    for(let i = 0; i < 10; i++) {
      this.getUser()
    }
    console.log(this.state.generatedUsers);
  }

  getUser = () => {
    const generatedUsers = this.state.generatedUsers; 
    API.default()
    .then(res => {
      generatedUsers.push(res.data.results);
      this.setState({ generatedUsers: generatedUsers
     });
    }
  )
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
