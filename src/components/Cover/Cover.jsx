import classes from "./Cover.module.css";
import NavBar from "./Navbar/Navbar";
import { motion } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";

export default function Cover() {
  return (
    <div className={classes.Cover}>
      <div className={classes.logos}>
        <img
          // src="https://raw.githubusercontent.com/Abuzariii/IUB-Science-Promotion-Society/main/src/images/Logos/20211107_224308-min.png"
          src={require("../../images/Logos/20211107_224308-min.png")}
          alt="iub"
          className={classes.l1}
        />
        <NavBar />
        <img
          // src="https://github.com/Abuzariii/IUB-Science-Promotion-Society/blob/main/src/images/Logos/20220619_131741-min.png?raw=true"
          src={require("../../images/Logos/20220619_131741-min.png")}
          alt="directorate-of-student-affairs"
          className={classes.l1}
        />
      </div>

      <div className={classes.title}>
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className={classes.t1}>IUB </h1>
          <h1 className={classes.t1}>Science Promotion Society.</h1>
        </motion.div>

        <br />
        <br />
        <div style={{ height: "70px" }}>
          <TypeWriterEffect
            textStyle={{
              color: "white",
              fontSize: "1.5em",
              letterSpacing: "1px",
              wordSpacing: "2px",
              fontFamily: "'Sanchez', serif",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              "Embrace Scientific Literacy Today...",
              "Promote Science and Create Impact",
              "Join the most accomplished society on your campus...",
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
        </div>
        <button className={classes.article}>
          <Link to={"/articles"}>Read Our Articles</Link>
        </button>
      </div>
    </div>
  );
}
