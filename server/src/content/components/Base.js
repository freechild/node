import React, { Component } from "react";
import Async from 'react-code-splitting';
import { Router, Route, Switch } from 'react-router'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/scss/bootstrap.scss';
import './base.scss';


import Article from './Article'
import Header from './Header'
import Footer from './Footer'
// const styles = () => (<Async load={import('./styles.scss')} />);
export default class Base extends Component{

    state ={
    
    }
    shouldComponentUpdate(nextProps, nextState) {
    return true;
    }
    render(){
        return(
        <main>          
            <Header />      
            <Article />
            <Footer />
        </main>
        );
    }
}

