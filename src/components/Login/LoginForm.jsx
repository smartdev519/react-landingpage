import React, { Component } from "react";
import Logo from "./../../assets/logo.png";
import axios from 'axios';




class LoginForm extends Component {

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };



  onSubmit = event => {
    event.preventDefault();
  
    const { history } = this.props;

    var session_url = process.env.REACT_APP_REST_API_LOCATION + "users/login";

    var payload={
      "email":this.state.email,
      "password":this.state.password }


    axios.post(session_url, payload)
      .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            console.log("Login successfull");
            this.context.router.history.push('/requests')
            }
            else if (response.status === 204) {
              console.log("Username password do not match");
              alert("username password do not match")
            } else {
              console.log("Username does not exists");
              alert("Username does not exist");
            }
          })
        .catch(function (error) {
          console.log(error);
        });
      

  
   
  };




  render() {
    return (
      <form className="box" onSubmit={this.onSubmit}>
        <div className="field has-text-centered">
          <img src={Logo} width="167" />
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="e.g. nouaman@gmail.com"
              onChange={this.handleInputChange}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="********"
              onChange={this.handleInputChange}
              required
            />

            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="checkbox">
            <input type="checkbox" required />
            Remember me
          </label>
        </div>
        <div className="field">
          <button className="button is-success" value="Submit">
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
