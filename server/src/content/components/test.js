import React, { Component } from 'react';
import { Route,Link,Switch  } from 'react-router-dom';

import { Header,Article,Footer } from './pages';
import PropTypes from 'prop-types';
import 'bootstrap/scss/bootstrap.scss';
import './base.scss';

// const Header = () => (<Async load={import('./pages/Header')} />);
// const Header = props => <Async load={import('./pages/Header')} componentProps={props}/>

// const Article = () => (<Async load={import('./pages/Article')} />);
// const Footer = () => (<Async load={import('./pages/Footer')} />);

class App extends Component {

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
        alert(this.props.Chapter);                
    }
    render() {
        return (
            <main>
                <ul>
                    <li><Link to="/content/Article">Article</Link></li>
                    <li><Link to="/content/Footer">Footer</Link></li>
                </ul>
                <Route exact path="/content/:name" component={Header}/>
                <Switch>                
                    <Route exact path="/content/Article" component={Article}/>
                    <Route exact path="/content/Footer" component={Footer}/>
                </Switch>                
            <hr/>
        </main>
        );
    }
}

export default App;