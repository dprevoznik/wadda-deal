var Promise = require("bluebird");
var mongoose = Promise.promisifyAll(require("mongoose"));

mongoose.connect(
  `mongodb+srv://wadda-deal-admin:${process.env.ATLAS_PASS}@cluster0.bmzdm.mongodb.net/wadda_deal?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

var db = mongoose.connection;

module.exports.db = db;
module.exports.mongoose = mongoose;