import Layout from "../components/layout";

export default function Submit() {
  return (
    <Layout>
      <h1>Submission Page</h1>
      <div>
        Establishment: <input></input>
      </div>
      <div>
        Address: <input></input>
      </div>
      <div>
        Image: <input></input>
      </div>
      <div>
        Website: <input></input>
      </div>
      <div>
        Deal: <input></input>
      </div>
      <div>
        Category: <select>
            <option>Drink</option>
            <option>Special</option>
        </select>
      </div>
      <div>
        neighborhood:{" "}
        <select>
          <option>Flatiron District</option>
          <option>Murray Hill</option>
        </select>
      </div>
    </Layout>
  );
}