export default function formatNeighborhoodURLs(urlArr) {
  let urlArrParsed = JSON.parse(JSON.stringify(urlArr));
  let output = {};

  for (let urlObj of urlArrParsed) {
    output[urlObj.neighborhood_param] = urlObj.url;
  }
  return output;
}
