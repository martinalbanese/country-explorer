import Layout from "@/components/Layout";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

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
