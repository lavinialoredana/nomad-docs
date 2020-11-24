import { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link to={"/document/" + this.props.document.id}>
            <span>Detail</span>
          </Link>
        </div>
      </>
    );
  }
}

export default DocumentItem;
