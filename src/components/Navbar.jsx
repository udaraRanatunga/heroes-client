import React, { Component } from "react";
import {Link} from 'react-router-dom' ;
class Navbar extends Component {
state = {};
render() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to ="/heroes">Heroes</Link>
            <Link to = "/">Home</Link>
            
        </nav>
    );
}
}

export default Navbar;