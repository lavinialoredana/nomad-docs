import React, { Component } from "react";
import logo from "./logo_nd.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="nomad docs" />
      </div>
    );
  }
}

export default Header;
