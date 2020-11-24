import React, { Component } from "react";
import "../DocumentView.css";

class DocumentView extends Component {
  render() {
    const { document } = this.props;

    const text = document.text && (
      <div className="text-container">{document.text}</div>
    );
    const image = document.image && (
      <img className="foto-container" src={document.image} alt="Penguin" />
    );

    return (
      <div className="main-container">
        <a href="none" target="blank">
          {" "}
          Next Document{" "}
        </a>
        <h1>{document.title}</h1>
        {/* I am now using these 2 variables to store the elements declared above*/}
        {text}
        {image}
        <button className="btn">Delete</button>
        <p>Document date is {new Date(document.date).toLocaleDateString()}.</p>
      </div>
    );
  }
}

export default DocumentView;
