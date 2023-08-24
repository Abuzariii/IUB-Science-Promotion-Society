import Head from "next/head";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import Footer from "../Main/Footer/Footer";
import data from "../data.json";
import classes from "./Article.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useCurrentUrl() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return currentUrl;
}

export default function Article() {
  const currentUrl = useCurrentUrl();
  const router = useRouter();
  const id = parseInt(router.query.id, 10);

  const targetObject = data.find((item) => item.id === id);
  if (!targetObject) {
    return <div>Article not found</div>;
  }
  const paragraphs = targetObject.article.split("\n");

  return (
    <div className={classes.article}>
      <Head>
        <title>Article {id}</title>
        <meta
          name="description"
          content="Our webiste features articles from students of all departments, please check out"
        />
        <meta name="theme-color" content="#008f68" />
      </Head>
      <div className={classes.navbar}>
        <h1>
          <Link href="/">Home</Link>
        </h1>
        <h1>
          <Link href="/articles">All Articles</Link>
        </h1>
      </div>
      <div className={classes.container}>
        <h1>{targetObject.title}</h1>
        <div className={classes.writer}>
          <h4>{targetObject.name}</h4>
          <h5>{targetObject.department}</h5>
          <h5>{targetObject.university}</h5>
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
        className={classes.label}
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
