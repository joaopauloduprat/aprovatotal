if (process.env.NODE_ENV !== "production") require("dotenv").config();

module.exports = {
  db_connection_string: process.env.DB_CONNECTION_STRING,
};
