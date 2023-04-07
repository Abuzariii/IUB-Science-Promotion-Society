import "./App.css";
import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Cover from "./components/Cover/Cover";
import Advisors from "./components/Body/Advisors/Advisors";
import CoreTeam from "./components/Body/Core Team/CoreTeam";
import Executives from "./components/Body/Executive Members/Executives";
import Events from "./components/Body/Events/Events";
import Volunteers from "./components/Body/Volunteers/Volunteers";

function App() {
  return (
    <Fragment>
      <Cover />
      <Advisors />
      <CoreTeam />
      <Executives />
      <Events />
      <Volunteers />
      <Footer />
    </Fragment>
  );
}

export default App;
