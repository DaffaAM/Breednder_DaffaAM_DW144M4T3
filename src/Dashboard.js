import React, { Component } from "react";
import profile from "./img/profile.jpg";
import { Image, Row, Col, Card } from "react-bootstrap";
import "./Dashboard.css";
import tinder from "./img/tinder.PNG";
import { Link } from "react-router-dom";
import Datakucing from "./data/datakucing.json";

console.log(Datakucing);

console.log(profile);

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="divkiri">
          <nav className="navkiri" href="/Profile">
            <Link to="/profile">
              {" "}
              <img
                className="profilebulat"
                src={profile}
                style={{}}
                alt="profile"
              />
            </Link>
            <p className="profile">Kochenk</p>
          </nav>
          <p className="wowini">
            <u> Match</u>{" "}
          </p>
          <div class="container">
            <div class="row">
              <Row className="rowkiri" />
              {Datakucing.map(m => (
                <Col sm={4} className="colclass">
                  <Card className="arraymap">
                    <img
                      src={m.Image}
                      alt="aa"
                      style={{
                        width: "100%",
                        height: "100%"
                      }}
                    />
                    <p>{m.name}</p>
                  </Card>
                </Col>
              ))}
            </div>
          </div>
        </div>
        <div className="divkanan">
          <Image src={tinder} className="gambartinder" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
