import Layout from "../../components/layout";
import data from "../../components/data";
import Head from "next/head";

export default function Deal({ data, mapKey }) {
  return (
    <Layout>
      <Head>
        <title>{`${data.establishment} | ${data.deal}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="deal-page">
        <h1 className="category">{data.category}</h1>
        <a href={`${data.website}`}>
          <h1 className="establishment">{data.establishment}</h1>
        </a>
        <img src={data.image} alt={`${data.establishment} photo`}></img>
        <p className="deal">{data.deal}</p>
        <h1 className="map-title">Location</h1>
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}
    &zoom=16&q="${
      data.establishment.replace("&", "").split(" ").join("+") +
      "+" +
      data.address.replace("&", "").split(" ").join("+")
    }"`}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = data.map((item) => {
    return {
      params: {
        id: String(item.id),
        neighborhood: item.neighborhood_param,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const dataId = data.filter((item) => item.id === Number(id));
  const mapKey = process.env.API_KEY;
  return {
    props: {
      id,
      data: dataId[0],
      mapKey,
    },
  };
}
