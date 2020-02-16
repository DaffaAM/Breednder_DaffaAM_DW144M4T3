import React, { Component } from "react";
import "./App.css";
import kucing from "./img/kucing.jpg";
import "./landing.css";
import Login from "./Login";
import Register from "./Register";

console.log(kucing);

class App extends Component {
  render() {
    return (
      <div className="bg">
        <Login />
        <h1>Breednder</h1>
        <h2>Swipe Right.</h2>
        <h3>Make Your Pet Happy</h3>
        <p className="landing">by clicking enter, you agree to our terms. </p>
        <p id="p2">
          Learn how we process your data in our Privacy Policy and Cookie
          Policy.
        </p>
        <img
          style={{ height: 800, width: 1524 }}
          src={kucing}
          alt="kucing"
          id="bg121"
        />
        ;<h4 id="footer">FIND YOUR PET'S MATCH!</h4>
        <Register />
      </div>
    );
  }
}

export default App;
