export default function formatNeighborhoodParam(str) {
  let splitStr = str.split("-");
  let formattedWords = [];
  for (let split of splitStr) {
    formattedWords.push(split[0].toUpperCase() + split.slice(1));
  }
  return formattedWords.join(" ");
}
