import React, { useState } from "react";
import { Modal, Form, Button, Image } from "react-bootstrap";
import Alert from "./Alert";
import { Redirect } from "react-router-dom";
import buktibayar from "./img/buktibayar.PNG";

function Premium() {
  const [show, setShow] = useState(false);
  const [showAlCon, setShowAlCon] = useState(false);
  const [pay, setPay] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowAlCon(true);
    setTimeout(() => {
      setPay(true);
    }, 3000);
  };
  const handleShow = () => setShow(true);

  const handleCloseAlCon = () => {
    setShowAlCon(false);
  };

  // const handleShowAlCon = () => setShowAlCon(true);

  return (
    <>
      {pay ? <Redirect to="/EditProfile" /> : ""}

      <Button id="addpet" variant="primary" onClick={handleShow}>
        Add Pet
      </Button>

      <Modal
        className="modalprem"
        show={show}
        onHide={() => this.handleModal(show)}
      >
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
          <Form.Control
            type="text"
            placeholder="No. Rek kamu"
            className="premiumnorek"
          ></Form.Control>
          <Image src={buktibayar} className="gambarbukti" />
          <Form.Group>
            <Button className="btnbayar" onClick={handleClose}>
              Kirim
            </Button>
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
          </Form.Group>
          <Form.Group></Form.Group>
          <div></div>
        </Modal.Body>
      </Modal>
      <Alert action={handleCloseAlCon} show={showAlCon} />
    </>
  );
}
export default Premium;
