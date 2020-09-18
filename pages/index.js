import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Deals from "../db/deals";
import formatNeighborhoodParam from "../helpers/formatNeighborhoodParam";

export default function App({ pathURLs, deals }) {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, minimum-scale=1"
        />
      </Head>
      <div className="home">
        <h1 className="home-deals-title">Newest Deals</h1>
        <div className="home-deals">
          {deals.map((deal) => (
            <Link href={`/${deal.neighborhood_param}/${deal._id}`}>
              <a>
                "
                {deal.deal.length > 60
                  ? deal.deal.slice(0, 60) + "..."
                  : deal.deal}
                "
              </a>
            </Link>
          ))}
        </div>
        <h1 className="home-title">Neighborhoods</h1>
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
    var deals = await Deals.find({ verified: true }).sort({ date: -1 });
  } catch (err) {
    console.log("err: ", err);
    pathURLs = [];
    deals = [];
  }
  return {
    props: {
      pathURLs,
      deals: JSON.parse(JSON.stringify(deals.slice(0, 3))),
    },
  };
}
