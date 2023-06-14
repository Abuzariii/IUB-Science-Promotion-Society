import { Fragment } from "react";
import Cover from "./Cover/Cover";
import Advisors from "./Body/Advisors/Advisors";
import CoreTeam from "./Body/Core Team/CoreTeam";
import Executives from "./Body/Executive Members/Executives";
import Events from "./Body/Events/Events";
import Volunteers from "./Body/Volunteers/Volunteers";
import Footer from "./Footer/Footer";

export default function Main() {
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
