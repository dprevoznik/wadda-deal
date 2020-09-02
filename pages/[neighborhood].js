import List from "../components/list";
import Layout from "../components/layout";
import Head from "next/head";
import Data from "../components/data";

export default function NeighborhoodList({ neighborhood_param }) {
  return (
    <Layout>
      <Head>
        <title>
          {" "}
          {neighborhood_param === "murray-hill"
            ? "Murray Hill"
            : "Flatiron District"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <title></title>
      <List neighborhood_param={neighborhood_param} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const unique = new Set();
  const pathURLs = [];

  for (let deal of Data) {
    if (!unique.hasOwnProperty(deal.neighborhood)) {
      unique.add(deal.neighborhood);
      pathURLs.push(deal.neighborhood);
    }
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
  return {
    props: {
      neighborhood_param,
    },
  };
}
