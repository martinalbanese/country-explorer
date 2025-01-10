import Layout from "@/components/Layout";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

/**
 * Componente principale dell'applicazione che gestisce le rotte e la navigazione.
 * Usa `Layout` per renderizzare una struttura base di layout con header fisso.
 *
 * @returns Il componente `Layout` che contiene le rotte dell'applicazione.
 */

function App() {
  return (
    <Layout>
      <Routes>
          {/* Homepage */}
          <Route path="/" element={<Home />} />
          {/* Dettaglio del paese */}
          {/* <Route path="/country/:name" element={<Details />} /> */}
        </Routes>
    </Layout>
  );
}

export default App;
