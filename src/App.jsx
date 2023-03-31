import "./App.css";
import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Cover from "./components/Cover/Cover";
import CoreTeam from "./components/Body/Core Team/CoreTeam";
import Executives from "./components/Body/Executive Members/Executives";
import Events from "./components/Body/Events/Events";

function App() {
  return (
    <Fragment>
      <Cover />
      <CoreTeam />
      <Executives />
      <Events />
      <Footer />
    </Fragment>
  );
}

export default App;
