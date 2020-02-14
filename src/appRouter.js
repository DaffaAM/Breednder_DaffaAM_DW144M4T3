import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Route path="/" exact component={App} />
        <Route path="/Login" component={Login}  /> 
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Profile" component={Profile} />
    </div>
    </BrowserRouter>
);

export default AppRouter;