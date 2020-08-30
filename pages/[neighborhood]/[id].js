import Layout from "../../components/layout";
import data from "../../components/data";

export default function Deal({ data }) {
  return (
    <Layout>
      <div>
        <h1>{data.category}</h1>
        <a href={`${data.website}`}>
          <h1>{data.establishment}</h1>
        </a>
        <img src={data.image} alt={`${data.establishment} photo`}></img>
        <p>{data.deal}</p>
      </div>
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
  const dataId = data.filter((item) => item.id === Number(id));
  return {
    props: {
      id,
      data: dataId[0],
    },
  };
}
