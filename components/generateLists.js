import data from "./data.js";
import ScrollabeList from "./scrollableList.jsx";

function generateLists() {
  let output = [];
  for (let key in data) {
    output.push(<ScrollabeList neighborhood={key} data={data[key]}></ScrollabeList>); 
  }
  return output;
}

export default generateLists;