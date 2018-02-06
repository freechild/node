import React from "react";
import title from '../img/subTitle_1.png';
import queryString from 'query-string';

// const Header = ({match}) =>{
//     const query = queryString.parse(location.search);
//     return(
//         <header>
//             <h1>{match.url},{match.params.name}</h1>
//             <img src={title}></img>  
//             {/* <h1>VALUE: { this.props.value }</h1> */}
//         </header>
//     )
// }


// export default Header;

class Header extends React.Component {
    constructor(props) {
        super(props);
        let match = props.match
        console.log(match);
        
    }
    
    render(){
        return(
            <div>{match.url}</div>
        )
    }
}

export default Header;