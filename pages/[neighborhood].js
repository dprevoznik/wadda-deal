import List from "../components/list";
import Layout from "../components/layout";
import Head from "next/head";
import Deals from "../db/deals";
import formatNeighborhoodParam from "../helpers/formatNeighborhoodParam";

export default function NeighborhoodList({ neighborhood_param, data }) {
  let title = formatNeighborhoodParam(neighborhood_param);
  return (
    <Layout>
      <Head>
        <title>{title} | Wadda Deal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Description"
          content={`The best bar/restaurant deals in ${title}! All listings are aggregated by Wadda Deal's New York City based community. What a deal!`}
        />
      </Head>
      <List title={title} data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    var pathURLs = await Deals.find({ verified: true }).distinct(
      "neighborhood_param"
    );
  } catch (err) {
    console.log("err: ", err);
    return { params: {} };
  }

  const paths = pathURLs.map((url) => {
    return {
      params: {
        neighborhood: url,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const neighborhood_param = params.neighborhood;
  try {
    var neighborhoodData = await Deals.find({
      neighborhood_param,
      verified: true,
    });
  } catch (err) {
    console.log("err: ", err);
    neighborhoodData = [];
  }

  return {
    props: {
      neighborhood_param,
      data: JSON.parse(JSON.stringify(neighborhoodData)),
    },
  };
}
