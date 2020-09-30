import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Deals from "../db/deals";
import StockPhotos from "../db/stockPhotos";
import formatNeighborhoodParam from "../helpers/formatNeighborhoodParam";
import formatNeighborhoodURLs from "../helpers/formatNeighborhoodURLs";

export default function App({ pathURLs, deals, photosFormatted }) {
  let randomIdx = Math.floor(Math.random() * deals.length);

  return (
    <Layout home random={deals[randomIdx]}>
      <Head>
        <title>Home | Wadda Deal</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, height=device-height, width=device-width, minimum-scale=1, maximum-scale=1.0, 
          user-scalable=no, target-densitydpi=device-dpi"
        />
        <meta
          name="Description"
          content="New Yorkers find the best bar/restaurant deals. We post them for all to see! Check out the latest featured deals, submit a new deal, or browse deals in a neighborhood. What a deal!"
        />
        <meta
          name="google-site-verification"
          content="ecCxrWIDWGWjAiyaSMigloGqLUv8kGZcYsed6Qr-4Os"
        />
      </Head>
      <div className="home">
        <h1 className="home-deals-title">Hot Deals</h1>
        <div className="home-deals">
          {deals.map((deal) => (
            <Link
              href={`/${deal.neighborhood_param}/${deal._id}`}
              key={deal.neighborhood_param + "" + deal._id}
            >
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
          <Link href="/[neighborhood]" as={`/${url}`} key={url}>
            <button
              className={`button-link`}
              style={{
                background: `url(${photosFormatted[url]}) no-repeat center bottom fixed`,
              }}
            >
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
    var photos = await StockPhotos.find();
  } catch (err) {
    console.log("err: ", err);
    pathURLs = [];
    deals = [];
  }
  return {
    props: {
      pathURLs,
      deals: JSON.parse(JSON.stringify(deals.slice(0, 4))),
      photosFormatted: formatNeighborhoodURLs(photos),
    },
  };
}
