import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo_nd.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img src={logo} alt="nomad docs" />{" "}
        </Link>
      </div>
    );
  }
}

export default Header;
