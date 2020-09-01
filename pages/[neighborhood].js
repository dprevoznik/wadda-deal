import List from "../components/list";
import Layout from "../components/layout";

export default function NeighborhoodList({ neighborhood_param }) {
  return (
    <Layout>
      <title>
        {neighborhood_param === "murray-hill" ? "Murray Hill" : "Flatiron District"}
      </title>
      <List neighborhood_param={neighborhood_param} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        neighborhood: "murray-hill",
      },
    },
    {
      params: {
        neighborhood: "flatiron",
      },
    },
  ];
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
