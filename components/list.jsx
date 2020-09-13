import ListItem from "./listItem";

export default function List({ title, data }) {
  let mapped = data.map((item) => <ListItem item={item} key={item._id} />);
  return (
    <div className="list">
      {" "}
      <h1 className="neighborhood-title">{`Welcome to ${title}`}</h1>
      {mapped}
    </div>
  );
}
