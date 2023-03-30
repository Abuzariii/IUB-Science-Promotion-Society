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
        <div className={classes.ct1}></div>
        <div className={classes.ct2}></div>
        <div className={classes.ct3}></div>
        <div className={classes.ct4}></div>
        <div className={classes.ct5}></div>
        <div className={classes.ct6}></div>
        <div className={classes.ct7}></div>
        <div className={classes.ct8}></div>
        <div className={classes.ct9}></div>
      </motion.div>
    </div>
  );
}
