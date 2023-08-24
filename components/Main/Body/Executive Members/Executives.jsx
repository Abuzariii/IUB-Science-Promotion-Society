import classes from "./Executives.module.sass";
import { motion } from "framer-motion";

export default function Executives() {
  return (
    <div className={classes.execs}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Executive Members.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={classes.ct4}>
          <div>
            <h4>Moeen Akhtar</h4>
            <h6>Dept. of Chemistry</h6>
          </div>
        </div>
        <div className={classes.ct1}>
          <div>
            <h4>Aiman Bukhari</h4>
            <h6>Dept. of Chemistry</h6>
          </div>
        </div>
        <div className={classes.ct2}>
          <div>
            <h4>Qamar Zaman</h4>
            <h6>Dept. of Zoology</h6>
          </div>
        </div>
        <div className={classes.ct3}>
          <div>
            <h4>M. Bilal Khalid</h4>
            <h6>Dept. of Agriculture</h6>
          </div>
        </div>
        <div className={classes.ct5}>
          <div>
            <h4>Sidra Qasim</h4>
            <h6>Dept. of Zoology</h6>
          </div>
        </div>
        <div className={classes.ct6}>
          <div>
            <h4>Marwa Yasmeen</h4>
            <h6>Dept. of Botany</h6>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
