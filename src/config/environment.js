if (process.env.NODE_ENV !== "production") require("dotenv").config();

module.exports = {
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
};
