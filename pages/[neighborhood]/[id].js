import Layout from "../../components/layout";
import Deals from "../../db/deals";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";

export default function Deal({ data, mapKey }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/support", {
        email,
        text: message,
        _id: data._id,
        deal: data.deal,
      })
      .then((result) => {
        console.log("support email successful");
      })
      .catch((err) => console.log("support email error"))
      .finally(() => {
        setEmail("");
        setMessage("");
      });
  };
  return (
    <Layout>
      <Head>
        <title>{`${data.deal} | ${data.establishment} | Wadda Deal`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Description"
          content={`${data.deal} - A ${data.category} deal at ${data.establishment} in the ${data.neighborhood} neighborhood of New York City. Spotted by a member of the Wadda Deal community. What a deal!`}
        />
      </Head>
      <div className="deal-page">
        <h1 className="category">{data.category}</h1>
        <a href={`${data.website}`}>
          <h1 className="establishment">{data.establishment}</h1>
        </a>
        <img src={data.image} alt={`${data.establishment} photo`}></img>
        <p className="deal">{data.deal}</p>
        <h1 className="section-title">Location</h1>
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
        <h1 className="section-title">Contact Us</h1>
        <form onSubmit={handleFeedbackSubmit}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              placeholder="Let us know how we can help!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="25"
              rows="5"
            ></textarea>
          </label>
          {email.length > 4 && message.length > 4 && (
            <input type="submit" value="Submit Feedback" />
          )}
        </form>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  let allData = await Deals.find({ verified: true });

  const paths = allData.map((item) => {
    return {
      params: {
        id: String(item._id),
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
  let allData = await Deals.find({ _id: params.id, verified: true });
  const id = params.id;
  const data = JSON.parse(JSON.stringify(allData[0]));
  const mapKey = process.env.API_KEY;
  return {
    props: {
      id,
      data,
      mapKey,
    },
  };
}
