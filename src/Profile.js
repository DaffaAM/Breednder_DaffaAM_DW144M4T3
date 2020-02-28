import React, { Component } from "react";
import { Form, Button, Card, Image } from "react-bootstrap";
import profile from "./img/profile.jpg";
import Premium from "./Premium";
import "./Dashboard.css";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import { Link } from "react-router-dom";
console.log(profile);
console.log(icon1);
console.log(icon2);
console.log(icon3);
console.log(icon4);

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="divkiri">
          <nav className="navkiri">
            <Link to="/Dashboard">
              <Image
                src={require("./img/arrowleft.png")}
                alt="kiri"
                id="ukuranpanah"
              />
            </Link>
            <img
              className="profilebulat"
              src={profile}
              style={{}}
              alt="profile"
            />
            ;<p className="profileedit">Profile Pet</p>
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

          <Link to="/">
            <Button className="btnlgt" variant="danger" type="submit">
              Logout
            </Button>
          </Link>
        </div>
        <div className="divkanan">
          <Premium />
          <div id="divcard">
            <Card style={{ width: "25rem" }} id="idcard">
              <Card.Img variant="top" src={profile} id="" />

              <Card.Body>
                <Card.Subtitle className="geser">Cat</Card.Subtitle>
                <Card.Title className="tebeltitle">Rocky</Card.Title>
                <div>
                  <Image src={icon1} id="ukuranicon" />
                  <span className="inispan">Breednder : Udin</span>
                </div>
                <div>
                  <Image src={icon2} id="ukuranicon" />
                  <span className="inispan">10 Kilometer dari sini</span>
                </div>
                <div>
                  <Image src={icon3} id="ukuranicon" />
                  <span className="inispan">Male - Adult</span>
                </div>
                <div>
                  <Image src={icon4} id="ukuranicon" />
                  <span className="inispan">Phone Breednder : 0899220227</span>
                </div>
                <Card.Title className="jarak">About</Card.Title>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="edit">
          <Link to="/EditProfile">
            <Button className="btnedit" type="submit">
              Edit{" "}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
