/* eslint-disable no-unused-vars */
import React, { component } from 'react';
// import logo from './logo.png';
// import {FaUserCircle} from "react-icons/fa";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
//import Sonnet from 'react-bootstrap/Sonnet';
// console.log(logo);
import "./style.scss";
import $ from 'jquery'; 

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        email: "",
      },
      roles: "manager"
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // handleTab = (event) => {
  //   this.setState((state) => ({
  //     user: {
  //       username: "",
  //       email: "",
  //       password: ""
  //     },
  //     roles: "manager"
  //   }))
  // }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === "username") {
      this.setState((state) => ({
        user: {
          username: value,
          email: state.user.email,
          password: state.user.password
        },
        roles: state.roles
      }))
    }
    if (name === "email") {
      this.setState((state) => ({
        user: {
          username: state.user.username,
          email: value,
          password: state.user.password
        },
        roles: state.roles
      }))
    }
    if (name === "password") {
      this.setState((state) => ({
        user: {
          username: state.user.username,
          email: state.user.email,
          password: value
        },
        roles: state.roles
      }))
    }
    if (name === "roles") {
      this.setState((state) => ({
        user: {
          username: state.user.username,
          email: state.user.email,
          password: state.user.password
        },
        roles: state.roles
      }))
    }
  }

  handleSubmitLogin = (event) => {
    // alert('A form was submitted: ' + this.state.username);
    console.log(JSON.stringify(this.state));
    this.state.roles = "";
    this.state.user.email = "";
    fetch('http://localhost:8000/accounts/api/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state)
    }).then(function (response) {
      console.log(response)
      if (response.status == "200") {
        // <Redirect to="/dashboard.jsx"/>;
      }
      return response.json();
    });

    event.preventDefault();
  }
  handleSubmitRegister = (event) => {
    // alert('A form was submitted: ' + this.state.username);
    console.log(JSON.stringify(this.state));
    if(this.state.roles==""){
      this.state.roles = "manager";
    }
    fetch('http://localhost:8000/accounts/api/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state)
    }).then(function (response) {
      console.log(response)
      if (response.status == "200") {
        // <Redirect to="/dashboard.jsx"/>;
      }
      return response.json();
    });

    event.preventDefault();
  }
  render() {
    // $( ".login .nav .nav-item" ).click(function() {
    //   this.state = {
    //     user: {
    //       username: "",
    //       password: "",
    //       email: "",
    //     },
    //     roles: "manager"
    //   }
    // });
    return (
      <login className="login">
        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" >
          <Tab eventKey="login" title="Login" onClick={this.handleTab}>
            <div className="form ml-1">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" value={this.state.user.username} onChange={this.handleInputChange} />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" value={this.state.user.password} onChange={this.handleInputChange} />
              </div>
              <div className="form-group footer">
                <button type="button" className="btn" onClick={this.handleSubmitLogin}>
                  Register
          </button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="register" title="Register" onClick={this.handleTab}>
            <div className="form ml-1">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" value={this.state.user.username} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" value={this.state.user.email} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" value={this.state.user.password} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="userrole">User Role</label>
                <select name="roles" placeholder="User Role" value={this.state.roles} onChange={this.handleInputChange}>
                  <option value="manager">Manager</option>
                  <option value="client">Client</option>
                  <option value="teammember">Team Member</option>
                </select>
              </div>
              <div className="form-group footer">
                <button type="button" className="btn" onClick={this.handleSubmitRegister}>
                  Register
          </button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </login>
    );
  }
}

export default Login;
