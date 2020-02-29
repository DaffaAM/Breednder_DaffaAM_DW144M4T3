import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link, Redirect } from "react-router-dom";
import { LoginA } from "./_actions/LoginA";
// import { LoginR } from "./_reducers/LoginR";

import { withRouter } from "react-router";

import "./landing.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      password: ""
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };
  handleLogin = e => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const data = { email, password };
    console.log("data login handle", data);
    this.props.LoginA(data);
  };

  handleEmail = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = e => {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  };
  render() {
    // console.log(this.props);
    // return <Redirect to="/Dashboard" />;

    const { show } = this.state;
    const { data, isLoading, authenticated, error } = this.props.login;
    return (
      <>
        {/* return <Redirect to="/Dashboard" />; */}
        {data.token != null ? this.props.history.push("/Dashboard") : null}

        <Button
          className="button"
          size="lg"
          variant="primary"
          onClick={() => this.handleModal(show)}
        >
          Login
        </Button>
        <Modal
          className="modalsize"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div id="coba1">
            <Modal.Title className="title-login"> Login</Modal.Title>
          </div>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              type="Email"
              placeholder="Email"
              className="email"
              value={this.state.email}
              onChange={this.handleEmail}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="passform"
              value={this.state.password}
              onChange={this.handlePassword}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Link to="/Dashboard">
              <Button
                className="buttonlogin"
                variant="primary"
                type="submit"
                onClick={this.handleLogin}
              >
                Submit
              </Button>
            </Link>
            <Form.Label></Form.Label>
          </Form.Group>
          <Form.Group></Form.Group>
          <div></div>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    login: state.LoginR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LoginA: data => dispatch(LoginA(data))
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
