import React from "react";

function DocumentFilter({ onChange }) {
  return (
    <select onChange={onChange}>
      <option disabled selected>Filter</option>
      <option>simple</option>
      <option>custom</option>
      <option>advanced</option>
      <option>all</option>
    </select>
  );
}
export default DocumentFilter;
