import "../styles/globals.scss";
import firebase from "../firebase";
import Head from "next/head";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

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
