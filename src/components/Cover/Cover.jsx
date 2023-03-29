import classes from "./Cover.module.css";
import NavBar from "./Navbar/Navbar";

export default function Cover() {
  return (
    <div className={classes.Cover}>
      <div className={classes.logos}>
        <img
          src="https://raw.githubusercontent.com/Abuzariii/IUB-Science-Promotion-Society/main/src/images/Logos/20211107_224308.png"
          alt="iub"
          className={classes.l1}
        />
        <NavBar />
        <img
          src="https://raw.githubusercontent.com/Abuzariii/IUB-Science-Promotion-Society/main/src/images/Logos/20220619_131741.png"
          alt="directorate-of-student-affairs"
          className={classes.l1}
        />
      </div>
    </div>
  );
}
