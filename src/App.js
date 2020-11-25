import DocumentList from "./Components/DocumentList";
import DocumentView from "./Components/DocumentView";
import { BrowserRouter, Route } from "react-router-dom";


const array_of_docs = [
  {
    title: "Penguin and Pinecone",
    type: "Simple",
    date: "2020/11/11",
    id: "1",
  },
  {
    title: "Penguin’s Big Adventure",
    type: "Custom",
    date: "2020/12/11",
    text:
      "Penguin wants to do something no penguin has done before – he wants to set foot on the North Pole. So Penguin sets out with his adventure map to travel to the other side of the world.",
    id: "2",
  },
  {
    title: "Little Penguin Gets the Hiccups",
    type: "Advanced",
    date: "2020/11/13",
    text:
      " Ben opens a gift and receives Penguin. Ben is so happy and wants to play. But Penguin says nothing. Ben tries and tries to get Penguin to talk or laugh. But Penguin says nothing. Little Penguin has a bad case of the hiccups. He tries different ways to get rid of them but nothing works. Will a good scare help him? ",
    image:
      "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
    id: "3",
  },
];

function App() {
  return (
    <BrowserRouter>
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
