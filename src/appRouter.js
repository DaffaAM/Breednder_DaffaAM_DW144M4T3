import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Deck from "./components/Deck";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/Login" component={Login} />
      <Route path="/Dashboard" component={Deck} />
      <Route path="/Profile" component={Profile} />
      <Route path="/EditProfile" component={EditProfile} />
      {/* <Route path="/Deck" component={Deck} /> */}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
