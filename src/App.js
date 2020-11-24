import DocumentList from "./Components/DocumentList";
import DocumentView from "./Components/DocumentView";
import { BrowserRouter, Route } from "react-router-dom";

const array_of_docs = [
  {
    title: "Casa de Bernarda Alba",
    type: "Simple",
    date: "2020/11/11",
    id: "1",
  },
  {
    title: "Casa del Sr. Usher",
    type: "Custom",
    date: "2020/12/11",
    text:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
    id: "2",
  },
  {
    title: "Casa del Sr. Usher",
    type: "Advanced",
    date: "2020/11/13",
    text:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
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
          const doc = array_of_docs.find(doc => id === doc.id );
          return <DocumentView document={doc} />;
        }}
      />
    </BrowserRouter>
  );
}

export default App;
