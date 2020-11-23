import { Component } from "react";

class DocumentItem extends Component {
  render() {
    return (
      <>
        <div className="list-child-1">
          <span className="tick-box"> </span>
          <h3>{this.props.document.title}</h3>
          <h4>{this.props.document.type}</h4>
        </div>
        <div className="list-child-2">
          <a href="none" target="blank">
            <span>Detail</span>
          </a>
        </div>
      </>
    );
  }
}

export default DocumentItem;
