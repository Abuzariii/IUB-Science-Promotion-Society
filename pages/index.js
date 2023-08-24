import Head from "next/head";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Science Promotion Society</title>
        <link rel="icon" href="/iubsps.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Main />
    </div>
  );
}
