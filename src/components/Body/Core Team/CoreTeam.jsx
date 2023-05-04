import classes from "./CoreTeam.module.css";
import { motion } from "framer-motion";

export default function CoreTeam() {
  return (
    <div className={classes.coreTeam}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Core Team.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={classes.ct1}>
          <div>
            <h4>Ammar Azhar</h4>
            <h5>President</h5>
            <h6>Dept. of Biotechnology</h6>
          </div>
        </div>
        <div className={classes.ct2}>
          <div>
            <h4>Umar Darogha</h4>
            <h5>SVP</h5>
            <h6>Dept. of Chemistry</h6>
          </div>
        </div>
        <div className={classes.ct3}>
          <div>
            <h4>Atif Zahid Mir</h4>
            <h5>Vice President I</h5>
            <h6>Dept. of Physics</h6>
          </div>
        </div>
        <div className={classes.ct4}>
          <div>
            <h4>Eman Musfira</h4>
            <h5>Vice President II</h5>
            <h6>Dept. of Biotechnology</h6>
          </div>
        </div>
        <div className={classes.ct5}>
          <div>
            <h4>M. Abuzar</h4>
            <h5>General Secretary</h5>
            <h6>Dept. of Software Eng.</h6>
          </div>
        </div>
        <div className={classes.ct6}>
          <div>
            <h4>Rashid Mehmood</h4>
            <h5>Joint Secretary I</h5>
            <h6>Institute of Physics</h6>
          </div>
        </div>
        <div className={classes.ct7}>
          <div>
            <h4>Shaiza Nasir</h4>
            <h5>Joint Secretary II</h5>
            <h6>Dept. of Biochemistry</h6>
          </div>
        </div>
        <div className={classes.ct8}>
          <div>
            <h4>Bakhtawar Bashir</h4>
            <h5>Finance Secretary</h5>
            <h6>Dept. of Biochemistry</h6>
          </div>
        </div>
        <div className={classes.ct9}>
          <div>
            <h4>Humna Khalil</h4>
            <h5>Press</h5>
            <h6>Dept. of Physics</h6>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
