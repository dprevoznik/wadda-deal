import "../styles/globals.scss";
import firebase from "../firebase";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon2.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
