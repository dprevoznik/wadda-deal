import Deals from "../db/deals";
import { useState, useEffect } from "react";
import List from "../components/list";
import Layout from "../components/layout";
import Head from "next/head";

function AllDeals({ allDeals, allNeighborhoods, allCategories }) {
  const [chosenNeighborhood, setChosenNeighborhood] = useState(
    "All Neighborhoods"
  );
  const [chosenCategory, setChosenCategory] = useState("All Categories");

  function filterData(data, neigh, cat) {
    let filteredNeighborhoods = data.filter(
      (item) => item.neighborhood === neigh || neigh === "All Neighborhoods"
    );

    let filteredCategories = filteredNeighborhoods.filter(
      (item) => item.category === cat || cat === "All Categories"
    );

    return filteredCategories;
  }

  return (
    <Layout>
      <Head>
        <title>Deals | Wadda Deal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The definitive list of every Wadda Deal bar/restaurant deals! Sort and filter to find the perfect deal for your next get together with friends. What a deal!"
        ></meta>
      </Head>
      <div className="deals-fixed">
        <div className="deals-filters">
          <select onChange={(e) => setChosenNeighborhood(e.target.value)}>
            <option>All Neighborhoods</option>
            {allNeighborhoods.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <select onChange={(e) => setChosenCategory(e.target.value)}>
            <option>All Categories</option>
            {allCategories.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <List
        title={"Find Deals"}
        data={filterData(allDeals, chosenNeighborhood, chosenCategory)}
      />
    </Layout>
  );
}

export default AllDeals;

export async function getStaticProps() {
  let allDeals = await Deals.find({ verified: true });
  let allNeighborhoods = await Deals.find({ verified: true }).distinct(
    "neighborhood"
  );
  let allCategories = await Deals.find({ verified: true }).distinct("category");

  return {
    props: {
      allDeals: JSON.parse(JSON.stringify(allDeals)),
      allNeighborhoods,
      allCategories,
    },
  };
}
