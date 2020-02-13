import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Route path="/" exact component={App} />
        <Route path="/Login" component={Login}  /> 
    </div>
    </BrowserRouter>
);

export default AppRouter;