import classes from "./Volunteers.module.css";
import { motion } from "framer-motion";

export default function Volunteers() {
  return (
    <div className={classes.volunteers}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Volunteers
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={classes.div1}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={classes.div2}
      ></motion.div>
    </div>
  );
}
