import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./landing.css";
import { connect } from "react-redux";
import { RegisterA } from "./_actions/RegisterA";
import { getSpecies } from "./_actions/SpeciesA";

class Register extends Component {
  componentDidMount() {
    this.props.getSpecies();
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedSpecies: "",
      breednder: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      namepet: "",
      gender: "",
      species: "",
      age: ""
    };
  }

  handleRegister = () => {
    const data = {
      breednder: this.state.breednder,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address,
      pet: {
        name: this.state.petName,
        gender: this.state.gender,
        species: this.state.selectedSpecies,
        age: this.state.age
      }
    };
    this.props.RegisterA(data);
    console.log(data);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  render() {
    const { show } = this.state;
    // const { data } = this.props.species;

    return (
      <>
        <Button
          className="button2"
          size="lg"
          variant="primary"
          onClick={() => this.handleModal(show)}
        >
          Register
        </Button>
        <Modal
          className="modalsize"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div>
            <Modal.Header className="title-login">
              <Modal.Title> Register</Modal.Title>
            </Modal.Header>
          </div>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Breeder"
              onChange={e => this.setState({ breednder: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Phone Breeder"
              onChange={e => this.setState({ phone: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Address Breeder"
              onChange={e => this.setState({ address: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Name Pet"
              onChange={e => this.setState({ petName: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Gender Pet"
              onChange={e => this.setState({ gender: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              className="formregist"
              onChange={e => this.setState({ selectedSpecies: e.target.value })}
            >
              <option></option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Snake</option>
              <option>Musquito</option>
              <option>Crocodile</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Age Pet"
              onChange={e => this.setState({ age: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Button
              className="buttonlogin"
              variant="primary"
              type="submit"
              onClick={this.handleRegister}
            >
              Submit
            </Button>
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
    species: state.species,
    register: state.RegisteR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSpecies: () => dispatch(getSpecies()),
    RegisterA: data => dispatch(RegisterA(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
