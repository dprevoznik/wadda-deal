import { useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { storage } from "../firebase";
import formatNeighborhood from "../helpers/formatNeighborhood";
import axios from "axios";

export default function Submit() {
  let [establishment, setEstablishment] = useState("");
  let [address, setAddress] = useState("");
  let [website, setWebsite] = useState("");
  let [deal, setDeal] = useState("");
  let [category, setCategory] = useState("Drink");
  let [neighborhood, setNeighborhood] = useState("Flatiron District");
  let [imageAsFile, setImageAsFile] = useState("");
  let [completed, setCompleted] = useState(false);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            return axios.post("/api/submit", {
              establishment,
              address,
              image: fireBaseUrl,
              website,
              deal,
              category,
              verified: false,
              neighborhood,
              neighborhood_param: formatNeighborhood(neighborhood),
              promotion: false,
              date: new Date(),
            });
          })
          .then((result) => setCompleted(true))
          .catch((err) => console.log(err));
      }
    );
  };

  return (
    <Layout submit>
      <Head>
        <title>Submit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {completed && (
        <div className="submit-page submit-page-success">
          <h1>Successful</h1>
          <img
            src="https://sciencemadefun.net/blog/wp-content/uploads/2020/04/gesture-772977_1920-1024x682.jpg"
            alt="girl with thumbs up"
          ></img>
          <p>
            Submission successfully completed. Thank you for taking the time to
            make this community better! Our team will now look over your newly
            submitted deal and verify it's authenticity before displaying it for
            everyone to see. Thanks again for making this place great :)
          </p>
        </div>
      )}
      {!completed && (
        <div className="submit-page">
          <h1>Submit</h1>
          <h3>Establishment</h3>
          <input onChange={(e) => setEstablishment(e.target.value)}></input>
          <h3>Address</h3>
          <input onChange={(e) => setAddress(e.target.value)}></input>
          <h3>Image</h3>{" "}
          <input type="file" onChange={handleImageAsFile}></input>
          <h3>Website</h3>
          <input onChange={(e) => setWebsite(e.target.value)}></input>
          <h3>Deal</h3>{" "}
          <input onChange={(e) => setDeal(e.target.value)}></input>
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
          {establishment &&
            address &&
            imageAsFile &&
            website &&
            deal &&
            category &&
            neighborhood && (
              <button onClick={handleFireBaseUpload}>Submit</button>
            )}
        </div>
      )}
    </Layout>
  );
}
