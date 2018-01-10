import React, { Component } from 'react';
import Async from 'react-code-splitting';
import { Router, Route, Switch } from 'react-router'

const Nav = () => (<Async load={import('./buttons')} />);
// const styles = () => (<Async load={import('./styles.scss')} />);
// import Nav from './buttons';

import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import style from './styles.scss'

import times from 'lodash/times';
import 'bootstrap/scss/bootstrap.scss';

export default class Base extends Component{

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  state ={
    CountOfButtons : 6,
    views : 5,
  }



  render(){
    return(
      
      <article className="hello">
        <Route path="/" component={Nav}
          
        />
        
        <div className="views">
          {
            times(this.state.views, i =>
              <div id={"view_"+i} key={i}></div>
            )
          }
        </div>
      </article>

    )
  }
}
