import React, {Component} from "react";
import {Button, Modal, Form, Image } from "react-bootstrap";
import "./landing.css";
import buktibayar from "./img/buktibayar.PNG"

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
          <Button id="addpet" size="" variant="primary" onClick={() => this.handleModal(show)}>Add Pet</Button>
   <Modal className="modalprem" show={show} onHide={() => this.handleModal(show)}>
   <Modal.Body className="bayar">
            <div>
              <Modal.Title className="premium-title">Premium</Modal.Title>
                <p id="premium1">Upgrade Breednder mu dan nikmati</p>
                <p id="premium2">fitur-fitur premium</p>
                <p id="premium3">Breednder : 0981312323</p>
            </div>
            <Form.Group>
              <Form.Label></Form.Label>
            </Form.Group>
            <Form.Control type="text" placeholder="No. Rek kamu" className="premiumnorek"></Form.Control>
            <Image src={buktibayar} className="gambarbukti" />
            <Form.Group>
            <Button className="btnbayar">Kirim</Button>
            </Form.Group>
            <Form.Group>
              <Form.Label></Form.Label>
            </Form.Group>
            <Form.Group>

            </Form.Group>
            <div>
            </div>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }


export default Login;
