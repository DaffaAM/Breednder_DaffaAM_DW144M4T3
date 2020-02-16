import React, { Component } from "react";
import { Form, Button, Card, Image } from "react-bootstrap";
import profile from "./img/profile.jpg";
import Premium from "./Premium";
import "./Dashboard.css";

console.log(profile);

class Profile2 extends Component {
  render() {
    return (
      <div>
        <div className="divkiri">
          <nav className="navkiri">
            <Image
              src={require("./img/arrowleft.png")}
              alt="kiri"
              id="ukuranpanah"
            />
            <img
              className="profilebulat"
              src={profile}
              style={{}}
              alt="profile"
            />

            <p className="profileedit2">Edit Profile Pet</p>
          </nav>
          <div>
            <h4 className="settingakun">Account Setting</h4>
          </div>
          <p>
            <span className="kananaja">Email</span> daffaa34@gmail.com{" "}
          </p>
          <hr id="hrid" />
          <p>
            <span className="kananaja">Phone</span> 08221121{" "}
          </p>

          <div>
            <h4 className="asuu">Discovery Setting</h4>
          </div>
          <Form.Group>
            <Form.Label className="kananin">10 Km.</Form.Label>

            <Form.Label className="tebelaja">Maximum Distance</Form.Label>
          </Form.Group>

          <div class="form-group">
            <input
              type="range"
              class="form-control-range"
              id="formControlRange"
              max="10"
              min="0"
            />
          </div>

          <Form.Label className="tebelaja">Age</Form.Label>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" className="formpet">
              <option>Baby</option>
              <option>Child</option>
              <option>Adult</option>
            </Form.Control>
          </Form.Group>

          <Form.Label className="tebelaja">Species</Form.Label>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" className="formpet">
              <option>Cat</option>
              <option>Dog</option>
              <option>Snake</option>
              <option>Crocodile</option>
              <option>Iguana</option>
            </Form.Control>
          </Form.Group>

          <Button className="btnlgt" variant="danger" type="submit" href="/">
            Logout
          </Button>
        </div>
        <div className="divkanan">
          <Premium />
          <div id="divcard">
            <Card style={{ width: "25rem" }} id="idcard"></Card>
          </div>
        </div>
        <Button className="btnedit1" type="submit" href="/Profile">
          Save
        </Button>
      </div>
    );
  }
}

export default Profile2;
