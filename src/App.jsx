import "./App.css";
import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Cover from "./components/Cover/Cover";
import CoreTeam from "./components/Body/Core Team/CoreTeam";
import Executives from "./components/Body/Executive Members/Executives";

function App() {
  return (
    <Fragment>
      <Cover />
      <CoreTeam />
      <Executives />
      <Footer />
    </Fragment>
  );
}

export default App;
