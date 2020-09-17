import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Deals from "../db/deals";
import formatNeighborhoodParam from "../helpers/formatNeighborhoodParam";

export default function App({ pathURLs }) {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="home">
        {pathURLs.map((url) => (
          <Link href="/[neighborhood]" as={`/${url}`}>
            <button className={`button-link ${url}`}>
              <span>{formatNeighborhoodParam(url)}</span>
            </button>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    var pathURLs = await Deals.find({ verified: true }).distinct(
      "neighborhood_param"
    );
  } catch (err) {
    console.log("err: ", err);
    pathURLs = [];
  }
  return {
    props: {
      pathURLs,
    },
  };
}
