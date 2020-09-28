import { db, mongoose } from "./index";

var stockPhotosSchema = new mongoose.Schema({
  query: String,
  unsplash_url: String,
});

module.exports =
  mongoose.models.StockPhotos || db.model("StockPhotos", stockPhotosSchema);
