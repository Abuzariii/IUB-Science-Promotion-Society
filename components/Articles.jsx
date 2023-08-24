import classes from "./Articles.module.scss";
import Footer from "./Main/Footer/Footer";
import data from "./data.json";
import Link from "next/link";
import Head from "next/head";

export default function Articles() {
  return (
    <div className={classes.mainDiv}>
      <Head>
        <title>Articles</title>
        <meta
          name="description"
          content="Our webiste features articles from students of all departments, please check out"
        />
        <meta name="theme-color" content="#008f68" />
      </Head>
      <h1>Read our Articles Below</h1>
      <br />
      <h5>Want to write for us? Click the link 👇</h5>
      <p>
        🔗{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfRb0uxC3owztubsZX5juJ_sDtGWX9w9mvWlDL8MWEE2gOZFQ/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer"
        >
          https://docs.google.com/forms/
        </a>{" "}
      </p>
      <div className={classes.container}>
        {data.map((item) => (
          <Link href={"/articles/" + item.id} key={item.id}>
            <div className={classes.art}>
              <h2>{item.title}</h2>
              <h5 className={classes.depart} style={{ marginBottom: "-10px" }}>
                {item.name}
              </h5>
              <h5 className={classes.depart}> {item.department}</h5>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
