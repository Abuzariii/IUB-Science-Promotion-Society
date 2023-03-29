import "./App.css";
import NavBar from "./components/Reusable/Navbar";
import About from "./components/Global/About";
import Footer from "./components/Reusable/Footer/Footer";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
