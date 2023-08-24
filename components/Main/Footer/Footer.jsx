import classes from "./Footer.module.sass";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.iconsDiv}>
        <a
          href="https://www.facebook.com/Iubsps"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook color="white" size="35px" />
        </a>
        <a
          href="https://www.instagram.com/iubsps/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram color="white" size="35px" />
        </a>
        <a href="https://twitter.com/iubsps" target="_blank" rel="noreferrer">
          <BsTwitter color="white" size="35px" />
        </a>
      </div>
      <p>IUB Science Promotion Society &copy; 2023</p>
    </footer>
  );
}
