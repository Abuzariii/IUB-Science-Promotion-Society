import classes from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <motion.div
      className={classes.mainDiv}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
    >
      <Navbar bg="dak" expand="lg" className={classes.Navbar}>
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              href="https://www.iub.edu.pk/"
              className={classes.item}
              style={{ color: "white" }}
            >
              The IUB
            </Nav.Link>
            <Nav.Link
              href="https://web.facebook.com/dsaiubpk"
              className={classes.item}
              style={{ color: "white" }}
            >
              DSA
            </Nav.Link>
          </Nav>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={classes.toggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="https://www.iub.edu.pk/"
                className={classes.item}
                style={{ color: "white" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="https://web.facebook.com/dsaiubpk"
                className={classes.item}
                style={{ color: "white" }}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;
