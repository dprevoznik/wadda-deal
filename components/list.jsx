import ListItem from "./listItem";
import data from "./data";

export default function List({ neighborhood }) {
  let filtered = data
    .filter((deal) => deal.neighborhood === neighborhood)
    .map((item) => <ListItem item={item} />);
  return <div>{filtered}</div>;
}
