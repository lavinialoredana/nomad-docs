import React from "react";

function DocumentFilter({ onChange }) {
  return (
    <select onChange={onChange}>
      <option>simple</option>
      <option>custom</option>
      <option>advanced</option>
    </select>
  );
}
export default DocumentFilter;