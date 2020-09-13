import Deals from "../../db/deals";

export default async function submitDeal(req, res) {
  try {
    await Deals.create(req.body);
  } catch (err) {
    console.log("err: ", err);
    res.status(500);
    res.json({});
  }
  res.status(201);
  res.json({});
}
