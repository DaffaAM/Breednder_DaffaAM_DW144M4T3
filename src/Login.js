import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./landing.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  render() {
    const { show } = this.state;

    return (
      <>
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
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="passform"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Link to="/Dashboard">
              <Button className="buttonlogin" variant="primary" type="submit">
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

export default Login;
