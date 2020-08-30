import { useState } from "react";
import Link from "next/link";

export default function ListItem({ item }) {
  let [details, showDetails] = useState(false);
  return (
    <Link
      href={"/[neighborhood]/[id]"}
      as={`/${item.neighborhood_param}/${item.id}`}
    >
      <div className="list-item">
        <div
          className="list-image"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <h1 className="category">{item.category}</h1>
        <h1 className="establishment">{item.establishment}</h1>
      </div>
    </Link>
  );
}
