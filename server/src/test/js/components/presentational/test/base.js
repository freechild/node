import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import style from './styles.scss'

import times from 'lodash/times';
import 'bootstrap/scss/bootstrap.scss';

export default class Base extends Component{

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  static defaultProps = {
    CountOfButtons : 0,
    views :0,
  }

  static propTypes = {
    CountOfButtons : PropTypes.number.isRequired,
    views : PropTypes.number.isRequired,
  }



  render(){
    return(
      
      <article className="hello">
        <Row>
          <Col>1</Col>
          <Col>2</Col>
        </Row>
        <div className="buttons">
          {
            times(this.props.CountOfButtons,i =>
              <div id={"btn_"+i} key={i}></div>
            )
          }
        </div>
        <div className="views">
          {
            times(this.props.views, i =>
              <div id={"view_"+i} key={i}></div>
            )
          }
        </div>
      </article>

    )
  }
}
