import React, { Component } from "react";
import { Form, Button, Card, Image } from "react-bootstrap";
import profile from "./img/profile.jpg";
import Premium from "./Premium";
import "./Dashboard.css";
import { Link } from "react-router-dom";

console.log(profile);

class Profile2 extends Component {
  render() {
    return (
      <div>
        <div className="divkiri">
          <nav className="navkiri">
            <Link to="/Profile">
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
            <Card style={{ width: "25rem" }} id="cardedit">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    {" "}
                    <img
                      src={require("./img/closebtn.png")}
                      alt="alt"
                      className="closeimg"
                    ></img>
                    <img
                      src={profile}
                      alt="profile"
                      className="aturukuran"
                    ></img>
                  </div>
                  <div class="col-md-4">
                    <img
                      src={require("./img/plusbtn.png")}
                      alt="alt"
                      className="plusimg"
                    ></img>
                    <img
                      src={require("./img/addpet.png")}
                      alt="masa"
                      className="aturukuran1"
                    ></img>
                  </div>
                  <div class="col-md-4">
                    {" "}
                    <img
                      src={require("./img/plusbtn.png")}
                      alt="alt"
                      className="plusimg1"
                    ></img>
                    <img
                      src={require("./img/addpet.png")}
                      alt="masa"
                      className="aturukuran2"
                    ></img>
                  </div>
                  <div class="col-md-4">
                    {" "}
                    <img
                      src={require("./img/plusbtn.png")}
                      alt="alt"
                      className="plusimg2"
                    ></img>
                    <img
                      src={require("./img/addpet.png")}
                      alt="profile"
                      className="aturukuran"
                    ></img>
                  </div>
                  <div class="col-md-4">
                    <img
                      src={require("./img/plusbtn.png")}
                      alt="alt"
                      className="plusimg"
                    ></img>
                    <img
                      src={require("./img/addpet.png")}
                      alt="masa"
                      className="aturukuran1"
                    ></img>
                  </div>
                  <div class="col-md-4">
                    {" "}
                    <img
                      src={require("./img/plusbtn.png")}
                      alt="alt"
                      className="plusimg1"
                    ></img>
                    <img
                      src={require("./img/addpet.png")}
                      alt="masa"
                      className="aturukuran2"
                    ></img>
                  </div>
                  <div class="col-md-4">
                    {" "}
                    <img
                      src={require("./img/plusbtn.png")}
                      alt="alt"
                      className="plusimg2"
                    ></img>
                    <img
                      src={require("./img/addpet.png")}
                      alt="profile"
                      className="aturukuran"
                    ></img>
                  </div>
                  <div class="col-md-4">
                    <img
                      src={require("./img/plusbtn.png")}
                      alt="alt"
                      className="plusimg"
                    ></img>
                    <img
                      src={require("./img/addpet.png")}
                      alt="masa"
                      className="aturukuran1"
                    ></img>
                  </div>
                  <div class="col-md-4">
                    {" "}
                    <img
                      src={require("./img/plusbtn.png")}
                      alt="alt"
                      className="plusimg1"
                    ></img>
                    <img
                      src={require("./img/addpet.png")}
                      alt="masa"
                      className="aturukuran2"
                    ></img>
                  </div>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="labelstyle">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        className="formnama"
                        value="Rocky"
                      />
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="labelstyle1">Breeder</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        className="formnama"
                        value="Udin"
                      />
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="labelstyle1">Gender</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        className="formnama"
                        value="Male"
                      />
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="labelstyle1">Age</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        className="formnama"
                        value="Adult"
                      />
                    </Form.Group>
                  </Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="labelstyle1">About Pet</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      className="formnama1"
                      value="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                  </Form.Group>
                  <Form className="formnama1"></Form>
                </div>
              </div>
            </Card>
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
