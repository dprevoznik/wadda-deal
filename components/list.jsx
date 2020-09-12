import ListItem from "./listItem";

export default function List({ title, data }) {
  let mapped = data.map((item) => <ListItem item={item} />);
  return (
    <div>
      {" "}
      <h1 className="neighborhood-title">{`Welcome to ${title}`}</h1>
      {mapped}
    </div>
  );
}
