import React, { Component } from "react";
import title from '../img/subTitle_1.png'

const Header = ({match,test}) =>{
    console.log(match);
    console.log(test);
    
    return(
        <header>
            {/* <h1>{match.url}</h1> */}
            <img src={title}></img>  
        </header>
    )
}

export default Header;