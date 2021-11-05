const mongoose = require("mongoose");
const { db_user, db_password } = require("../config/environment");

mongoose
  .connect(
    `mongodb+srv://${db_user}:${db_password}@cluster0.igpsq.mongodb.net/desafio-aprovatotal?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((error) => console.error(error));

mongoose.Promise = global.Promise;

module.exports = mongoose;
