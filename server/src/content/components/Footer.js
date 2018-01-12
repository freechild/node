import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import './footer.scss'

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="footers">index</div>
                <div className="seekLayer_top"></div>
                <div className="footers">00:00 / 00:00</div>
                <div className="footers"></div>
                <div className="footers"></div>
                <div className="footers"></div>
            </footer>
        )
      }
}