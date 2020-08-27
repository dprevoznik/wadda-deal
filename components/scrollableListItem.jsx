import React, { useState } from "react";
import API_KEY from "../api.config";

function ScrollableListItem(props) {
  var { item } = props;
  var [map, showMap] = useState(false);
  var [verifyModal, showVerifyModal] = useState(false);
  return (
    <div className="ScrollableListItem">
      <img src={item.image} alt={`${item.establishment} image`}></img>
      <h1 className="establishment">{item.establishment}</h1>
      <span className="category">{item.category}</span>
      <p className="deal">{item.deal}</p>
      <span className={`category ${item.promotion && "promotion"}`}>
        {item.promotion && "Promoted: "}
        {item.category}
      </span>
      {map && (
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
            &zoom=21&q="${
              item.establishment.replace("&", "").split(" ").join("+") +
              "+" +
              item.address.replace("&", "").split(" ").join("+")
            }"`}
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      )}
      {verifyModal && (
        <div className="verify-modal">
          <h1 className="verify-header">Verify The Deal</h1>
        </div>
      )}
      <div className="buttons">
        <button className="heart">❤️</button>
        <button
          className="verify"
          onClick={() => showVerifyModal(!verifyModal)}
        >
          ✔️
        </button>
        <button
          className={`map ${map && "map_shown"}`}
          onClick={() => showMap(!map)}
        >
          🗺️
        </button>
      </div>{" "}
    </div>
  );
}

export default ScrollableListItem;
