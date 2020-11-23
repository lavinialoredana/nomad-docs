import DocumentList from "./Components/DocumentList";
import DocumentView from "./Components/DocumentView";

const array_of_docs = [
  {
    title: "Casa de Bernarda Alba",
    type: "Novela",
  },
  {
    title: "Casa del Sr. Usher",
    type: "Cuento",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DocumentList documents={array_of_docs} />
        <DocumentView />
      </header>
    </div>
  );
}

export default App;
