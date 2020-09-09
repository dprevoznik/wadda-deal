import { useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";

export default function Submit() {
  let [establishment, setEstablishment] = useState("");
  let [address, setAddress] = useState("");
  let [image, setImage] = useState("");
  let [website, setWebsite] = useState("");
  let [deal, setDeal] = useState("");
  let [category, setCategory] = useState("Drink");
  let [neighborhood, setNeighborhood] = useState("Flatiron District");

  return (
    <Layout>
      <Head>
        <title>Submit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="submit-page">
        <h1>Submission</h1>
        <h3>Establishment</h3>{" "}
        <input onChange={(e) => setEstablishment(e.target.value)}></input>
        <h3>Address</h3>
        <input onChange={(e) => setAddress(e.target.value)}></input>
        <h3>Image</h3>{" "}
        <input onChange={(e) => setImage(e.target.value)}></input>
        <h3>Website</h3>
        <input onChange={(e) => setWebsite(e.target.value)}></input>
        <h3>Deal</h3> <input onChange={(e) => setDeal(e.target.value)}></input>
        <h3>Category</h3>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>Drink</option>
          <option>Special</option>
        </select>
        <h3>Neighborhood</h3>
        <select onChange={(e) => setNeighborhood(e.target.value)}>
          <option>Flatiron District</option>
          <option>Murray Hill</option>
        </select>
        <button>Submit</button>
      </div>
    </Layout>
  );
}
