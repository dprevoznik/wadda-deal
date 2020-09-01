import { useState } from "react";
import Layout from "../components/layout";

export default function Submit() {
  let [establishment, setEstablishment] = useState("");
  let [address, setAddress] = useState("");
  return (
    <Layout>
      <div className="submit-page">
        <h1>Submission</h1>
        <h3>Establishment</h3> <input></input>
        <h3>Address</h3>
        <input required></input>
        <h3>Image</h3> <input></input>
        <h3>Website</h3>
        <input></input>
        <h3>Deal</h3> <input></input>
        <h3>Category</h3>
        <select>
          <option>Drink</option>
          <option>Special</option>
        </select>
        <h3>Neighborhood</h3>
        <select>
          <option>Flatiron District</option>
          <option>Murray Hill</option>
        </select>
        <button>Submit</button>
      </div>
    </Layout>
  );
}
