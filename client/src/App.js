import "./App.css";
import Post from "./Post";

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>

      <Route index element={<IndexPage />} />
      <Route path={"/login"} element={<div>login page</div>} />

      </Route>
    </Routes>
  );
}

export default App;
