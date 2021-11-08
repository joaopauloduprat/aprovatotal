const mongoose = require("mongoose");
const { db_connection_string } = require("../config/environment");

mongoose
  .connect(db_connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.error(error));

mongoose.Promise = global.Promise;

module.exports = mongoose;
