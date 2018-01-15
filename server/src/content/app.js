import React from "react";
import ReactDOM from "react-dom";
import App from "./components/Base";
import { BrowserRouter } from 'react-router-dom'

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , wrapper
) : false;
