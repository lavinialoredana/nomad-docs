import DocumentList from "./Components/DocumentList";
import DocumentView from "./Components/DocumentView";
import { BrowserRouter, Route } from "react-router-dom";
import {array_of_docs} from './data.js';
import Header from './Components/Header'



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path="/">
        <DocumentList documents={array_of_docs} />
      </Route>
      <Route
        path="/document/:id"
        render={(props) => {
          const { match } = props;
          const { id } = match.params;
          const doc = array_of_docs.find((doc) => id === doc.id);
          return <DocumentView document={doc} />;
        }}
      />
    </BrowserRouter>
  );
}

export default App;
