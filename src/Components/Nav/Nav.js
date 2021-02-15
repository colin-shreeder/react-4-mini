import React, { Component } from "react";
import logo from "./../../images/Blogger2.png";
import "./Nav.css";
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <img src={logo} alt="dm logo" />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
