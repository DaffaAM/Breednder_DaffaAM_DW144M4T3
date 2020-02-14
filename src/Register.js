import React, {Component} from "react";
import {Button, Modal, Form } from "react-bootstrap";
import "./landing.css";

class Register extends Component {
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
            className="button2" size="lg" variant="primary" onClick={() => this.handleModal(show)}>Register</Button>
   <Modal className="modalsize" show={show} onHide={() => this.handleModal(show)}>
            <div>
            <Modal.Header className="title-login">

              <Modal.Title > Register</Modal.Title>
              </Modal.Header>
            </div>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control className="formregist" type="text" placeholder="Breeder" ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control className="formregist" type="text" placeholder="Email"></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Control className="formregist" type="password" placeholder="Password" ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Control className="formregist" type="text" placeholder="Phone Breeder" ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Control className="formregist" type="text" placeholder="Address Breeder"></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Control className="formregist" type="text" placeholder="Name Pet" ></Form.Control>
            </Form.Group> 
            <Form.Group>
            <Form.Control className="formregist" type="text" placeholder="Gender Pet" ></Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" className="formregist">
      <option>Pet Species : Choose One</option>
      <option>Cat</option>
      <option>Dog</option>
      <option>Snake</option>
      <option>Musquito</option>
      <option>Crocodile</option>

    </Form.Control>
  </Form.Group>
  <Form.Group>
            <Form.Control className="formregist" type="text" placeholder="Gender Pet" ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button className="buttonlogin" variant="primary" type="submit">Submit</Button>
              <Form.Label></Form.Label>
              </Form.Group>
              <Form.Group></Form.Group>
            <div>
            </div>
          </Modal>
        </>
      );
    }
  }


export default Register;