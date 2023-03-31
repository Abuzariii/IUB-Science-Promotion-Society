import classes from "./Advisors.module.css";
import { motion } from "framer-motion";

export default function Advisors() {
  return (
    <div className={classes.advisors}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Advisory Board.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={classes.ct1}>
          <div>
            <h4>Dr Athar Mehboob</h4>
            <h6>Vice Chancellor The IUB</h6>
          </div>
        </div>
        <div className={classes.ct2}>
          <div>
            <h4>Rizwan Majeed</h4>
            <h6>Director Student Affairs</h6>
          </div>
        </div>
        <div className={classes.ct3}>
          <div>
            <h4>Dr. Azhar Hussain</h4>
            <h6>Additional DSA</h6>
          </div>
        </div>
        <div className={classes.ct4}>
          <div>
            <h4>Dr. Maqsood Ahmad</h4>
            <h6>Advisor IUBSPS</h6>
          </div>
        </div>
        <div className={classes.ct5}>
          <div>
            <h4>Dr. Raza Ashraf</h4>
            <h6>Co Advisor</h6>
          </div>
        </div>
        <div className={classes.ct6}>
          <div>
            <h4>Dr. Sajjad Ali</h4>
            <h6>Co Advisor</h6>
          </div>
        </div>
        <div className={classes.ct7}>
          <div>
            <h4>Dr. Ramzan Khawar</h4>
            <h6>Co Advisor</h6>
          </div>
        </div>
        <div className={classes.ct8}>
          <div>
            <h4>Miss Bushra</h4>
            <h6>Co Advisor</h6>
          </div>
        </div>
        <div className={classes.ct9}>
          <div>
            <h4>Miss Aqsa Bilal</h4>
            <h6>Co Advisor</h6>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
