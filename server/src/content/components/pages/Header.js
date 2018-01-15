import React, { Component } from "react";
import title from '../img/subTitle_1.png'

export default class Header extends Component{
    render(){
        return(
            <header>
                <img src={title}></img>  
            </header>
        )
      }
}