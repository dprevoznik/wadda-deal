import Deals from "../../db/deals";

export default async function submitDeal(req, res) {
  try {
    await Deals.create(req.body);
  } catch (err) {
    console.log("err: ", err);
    res.send(500);
  }
  res.send(201);
}
