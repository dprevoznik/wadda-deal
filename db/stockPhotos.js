import { db, mongoose } from "./index";

var stockPhotosSchema = new mongoose.Schema({
  neighborhood_param: String,
  url: String,
});

module.exports =
  mongoose.models.StockPhotos || db.model("StockPhotos", stockPhotosSchema);
