import React, { Component } from "react";
import "../DocumentList.css";
import DocumentItem from "./DocumentItem.js";
import Header from "../Components/Header";

const renderListItem = function (documentItem) {
  return (
    // I'm producing the renderization of a list item
    // containing a DocumentItem component
    // this component will render a document, made of a "documentItem"
    <li>
      <DocumentItem document={documentItem} />
    </li>
  );
};

class DocumentList extends Component {
  render() {
    return (
      <div>
        <Header />
        <ul className="list-container">
          {/* // I am rendering all the elements on "documents" list
        // by calling map I know for each element a render function will be called,
        // the render function that will be called is "renderListItem",
        // because I type this function as the argument of "map" */}
          {this.props.documents.map(renderListItem)}
        </ul>
      </div>
    );
  }
}
export default DocumentList;
