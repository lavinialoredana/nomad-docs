import { Component } from "react";
import { Link } from "react-router-dom";
import "./DocumentItem.css";

class DocumentItem extends Component {
  render() {
    return (
      <>
        <div className="list-main">
          <div className="container-left">
            <div className="tick-box"> </div>
            <div className="text-box">
              <h3 className="h3">{this.props.document.title}</h3>
              <h4 className="h4">{this.props.document.type}</h4>
            </div>
          </div>
          <div className="container-right">
            <Link to={"/document/" + this.props.document.id}>
              <span className="link">Detail</span>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default DocumentItem;
