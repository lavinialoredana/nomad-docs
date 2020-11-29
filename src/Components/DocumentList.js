import React, { useState, useEffect } from "react";
import "../DocumentList.css";
import DocumentItem from "./DocumentItem.js";
import fetchDocuments from "../fetchDocuments";

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

const DocumentList = () => {
  const [typeOfDocument, setTypeOfDocument] = useState("All");
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchResults, setFetchResults] = useState(
    fetchDocuments(typeOfDocument, pageNumber),
  );

  useEffect(() => {
    setFetchResults(fetchDocuments(typeOfDocument, pageNumber));
  }, [typeOfDocument, pageNumber]);


  const onChange = (event) => {
    setTypeOfDocument(event.target.value);
  };

  const changeToPage = (pageNumber) => {
    console.log(pageNumber);
    setPageNumber(pageNumber)
  }
  return (
    <div>
      <select onChange={onChange}>
        <option disabled selected>
          Filter
        </option>
        <option value="Simple">simple</option>
        <option value="Custom">custom</option>
        <option value="Advanced">advanced</option>
        <option value="All">all</option>
      </select>

      <ul className="list-container">
        {/* // I am rendering all the elements on "documents" list
        // by calling map I know for each element a render function will be called,
        // the render function that will be called is "renderListItem",
        // because I type this function as the argument of "map" */}
        {fetchResults?.documents.map(renderListItem)}
      </ul>
      <div className="page-container">
        {
          <div className="page-container">
            {Array(fetchResults.numberOfPages)
              .fill()
              .map((value, index) => (
                <div onClick={()=>changeToPage(index+1)}>{index+1}</div>
              ))}
          </div>
        }
      </div>
    </div>
  );
};
export default DocumentList;
