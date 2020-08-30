import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function Deal(props) {
  return (
    <Layout>
      <h1>{props.id}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        id: "1",
        neighborhood: "murray-hill",
      },
    },
    {
      params: {
        id: "2",
        neighborhood: "murray-hill",
      },
    },
    {
      params: {
        id: "3",
        neighborhood: "murray-hill",
      },
    },
    {
      params: {
        id: "4",
        neighborhood: "flatiron",
      },
    },
    {
      params: {
        id: "5",
        neighborhood: "flatiron",
      },
    },
    {
      params: {
        id: "6",
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
  const id = params.id;
  return {
    props: {
      id,
    },
  };
}
