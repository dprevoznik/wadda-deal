import Deals from "../../db/deals";

export default async function fetchAllData(req, res) {
  res.statusCode = 200;
  try {
    var deals = await Deals.find({verified: true});
  } catch (err) {
    console.log("err: ", err);
    res.send(500);
  }
  res.send(deals);
}
