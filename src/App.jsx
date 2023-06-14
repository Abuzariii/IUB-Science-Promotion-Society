import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Articles/Article/Article";
import Articles from "./components/Articles/Articles";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:id" element={<Article />} />
      </Routes>
    </Fragment>
  );
}

export default App;
