export default function formatNeighborhood(str) {
  let lowercase = str.toLowerCase();
  let splitLowercase = lowercase.split(" ");
  let joinLowercase = splitLowercase.join("-");
  return joinLowercase;
}
