import { Helmet } from "react-helmet";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import Footer from "../../Footer/Footer";
import data from "../data.json";
import classes from "./Article.module.css";

export default function Article() {
  const { id } = useParams();
  const targetObject = data[id];
  const paragraphs = targetObject.article.split("\n");
  const currentUrl = window.location.href;

  return (
    <div className={classes.article}>
      <Helmet>
        <title>Article {id}</title>
        <meta
          name="description"
          content="Our webiste features articles from students of all departments, please check out"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <div className={classes.container}>
        <h1>{targetObject.title}</h1>
        <div className={classes.writer}>
          <h4>{targetObject.name}</h4>
          <h5>{targetObject.department}</h5>
        </div>

        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Share with your friends{" "}
        <div>
          <FacebookShareButton url={currentUrl}>
            {" "}
            <BsFacebook size={20} />
          </FacebookShareButton>
          <WhatsappShareButton url={currentUrl}>
            <BsWhatsapp size={20} />
          </WhatsappShareButton>
          <LinkedinShareButton url={currentUrl}>
            <BsLinkedin size={20} />
          </LinkedinShareButton>
        </div>
      </label>

      <Footer />
    </div>
  );
}
