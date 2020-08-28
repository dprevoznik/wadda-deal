import ListItem from "./listItem";
import data from "./data";

export default function List({ neighborhood_param }) {
  let filtered = data
    .filter((deal) => deal.neighborhood_param === neighborhood_param);
  let mapped = filtered.map((item) => <ListItem item={item} />);
  return (
    <div>
      {" "}
      <h1 className="neighborhood-title">{`Welcome to ${filtered[0].neighborhood}`}</h1>
      {mapped}
    </div>
  );
}
