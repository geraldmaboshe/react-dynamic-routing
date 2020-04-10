import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none',

    }
    return (
        
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to='/about' style={navStyle}>
            <li>About</li>
          </Link>
          <Link to='/shop' style={navStyle}>
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
