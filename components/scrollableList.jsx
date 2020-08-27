import ScrollableListItem from "./scrollableListItem.jsx";


function ScrollableList({ data, neighborhood }) {
  return (
    <div className="ScrollableListContainer">
      <h1 className="title">{neighborhood}</h1>
      <div className="ScrollableList">
        {data.map((item) => {
          return <ScrollableListItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default ScrollableList;
