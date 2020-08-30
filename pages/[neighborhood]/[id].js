import Layout from "../../components/layout";
import data from "../../components/data";

export default function Deal({ data }) {
  console.log(process.env.API_KEY);
  return (
    <Layout>
      <div className="deal-page">
        <h1 className="category">{data.category}</h1>
        <a href={`${data.website}`}>
          <h1 className="establishment">{data.establishment}</h1>
        </a>
        <img src={data.image} alt={`${data.establishment} photo`}></img>
        <p className="deal">{data.deal}</p>
        <h1 className="map-title">Location</h1>
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${
            process.env.API_KEY
          }
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
