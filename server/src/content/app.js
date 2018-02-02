import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from "./components/base";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(
<Router>    
    <App />
</Router>    
, wrapper) : false;


