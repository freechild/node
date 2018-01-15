
import React, { Component } from "react";
import Async from 'react-code-splitting';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import './base.scss';

const Header = () => (<Async load={import('./pages/Header')} />);
const Article = () => (<Async load={import('./pages/Article')} />);
const Footer = () => (<Async load={import('./pages/Footer')} />);

  
export default class Base extends Component{
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        Chapter : 0,
    }

    static propTypes = {
        Chapter : PropTypes.number.isRequired
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount(){
        console.log(this.props.Chapter);        
    }

    render(){
        return(        
            <main>
                <Route exact path='/content/*' component={Header}/>
                <Route exact path='/content/*' component={Article}/>
                <Route exact path='/content/*' component={Footer}/>                    
            </main>
        );
    }
}

