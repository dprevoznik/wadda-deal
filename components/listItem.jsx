export default function ListItem({ item }) {
  return (
    <div className="list-item">
      <h1>{item.establishment}</h1>
      <h1>{item.category}</h1>
      <h1>{item.deal}</h1>
      <h1>{item.neighborhood}</h1>
    </div>
  );
}
