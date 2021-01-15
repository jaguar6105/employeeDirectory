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
    for (let i = 0; i < 10; i++) {
      this.getUser()
    }
    console.log(this.state.generatedUsers);
  }

  getUser = () => {
    const generatedUsers = this.state.generatedUsers;
    API.default()
      .then(res => {
        if (res.data.results[0].id.value !== null) {
          console.log(res.data.results[0]);
          generatedUsers.push(res.data.results[0]);
          this.setState({
            generatedUsers: generatedUsers
          });
        }
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
        <Filter />
        <table >
          <tr>
          <th></th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>

          </tr>
          {this.state.generatedUsers.map((user) =>
            <Table key={user.id.name + user.id.value}
              image={user.picture.medium}fName={user.name.first} lName={user.name.last} age={user.dob.age} gender={user.gender}
              phone={user.phone} email={user.email}/>
          )}
          <Table />
        </table>
      </div>
    );
  }
}

export default TableContainer;
