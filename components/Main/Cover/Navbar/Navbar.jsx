import { motion } from "framer-motion";
import classes from "./Navbar.module.scss";

function NavBar() {
  return (
    <motion.div
      className={classes.mainDiv}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
    >
      <div className={classes.Navbar}>
        <a href="https://www.iub.edu.pk/" target="_blank">
          The IUB
        </a>
        <a
          href="https://web.facebook.com/dsaiubpk"
          target="_blank"
          className={classes.noMobile}
        >
          DSA
        </a>
        <a target="_blank" className={classes.noMobile}>
          About
        </a>
        <a target="_blank">Contact Us</a>
      </div>
    </motion.div>
  );
}

export default NavBar;
