export default function formatNeighborhoodURLs(urlArr) {
  let output = {};
  for (let neighborObj of urlArr) {
    output[neighborObj.neighborhood_param] = neighborObj.url;
  }
  return output;
}
