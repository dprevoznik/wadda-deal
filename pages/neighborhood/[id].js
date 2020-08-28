import List from "../../components/list";
import Layout from "../../components/layout";

export default function NeighborhoodList({ neighborhood_param }) {
  return (
    <Layout>
      <List neighborhood_param={neighborhood_param} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        id: "flatiron",
      },
    },
    {
      params: {
        id: "murray-hill",
      },
    },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const neighborhood_param = params.id;
  return {
    props: {
      neighborhood_param,
    },
  };
}
