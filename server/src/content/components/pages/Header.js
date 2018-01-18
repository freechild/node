import React from "react";
import title from '../img/subTitle_1.png';
import queryString from 'query-string';

const Header = ({match}) =>{
    const query = queryString.parse(location.search);
    return(
        <header>
            <h1>{match.url},{match.params.name}</h1>
            <img src={title}></img>  
        </header>
    )
}

export default Header;