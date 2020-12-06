import { array_of_docs } from "./data";

const fetchDocuments = (type = "All", page = 1) => {
  const resultsPerPage = 5;

  const filteredArray =
    type === "All"
      ? array_of_docs
      : array_of_docs.filter((document) => document.type === type);

  const numberOfResults = filteredArray.length;

  const sliceLimit = numberOfResults < page*resultsPerPage?
    numberOfResults : page*resultsPerPage;

  const slicedArray = filteredArray.slice(
    page * resultsPerPage - resultsPerPage,
    sliceLimit,
  );

  const numberOfPages = Math.ceil(numberOfResults / resultsPerPage);

  return { documents: slicedArray, numberOfPages: numberOfPages };
};

export default fetchDocuments;
