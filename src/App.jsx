import "./App.css";
import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Cover from "./components/Cover/Cover";
import CoreTeam from "./components/Body/Core Team/CoreTeam";

function App() {
  return (
    <Fragment>
      <Cover />
      <CoreTeam />
      <Footer />
    </Fragment>
  );
}

export default App;
