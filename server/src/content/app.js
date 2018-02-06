import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';

import counterApp from './reducers';

import App from "./components/base";

let store = createStore(counterApp)

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(
    <Provider store = {store}>
        <Router>    
            <App />
        </Router>    
    </Provider>
, wrapper) : false;


