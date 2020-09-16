import { db, mongoose } from "./index";

var dealsSchema = new mongoose.Schema({
  establishment: String,
  address: String,
  image: String,
  website: String,
  deal: String,
  verified: Boolean,
  category: String,
  neighborhood: String,
  neighborhood_param: String,
  promotion: Boolean,
  date: Date
});

module.exports = mongoose.models.Deals || db.model("Deals", dealsSchema);
