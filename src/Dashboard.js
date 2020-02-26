import React, { Component } from "react";
import profile from "./img/profile.jpg";
import { Row, Col, Card } from "react-bootstrap";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Datakucing from "./data/datakucing.json";

console.log(Datakucing);

console.log(profile);

class Dashboard extends Component {
  render() {
    return (
      <>
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
          Match
          <hr className="matchgaris" />
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
      </>
    );
  }
}

export default Dashboard;
