const express = require("express");
const router = express.Router();

const matricula_controller = require("../controllers/matriculaController");

router.post("/", matricula_controller.create);

router.get("/", matricula_controller.list);

module.exports = (app) => app.use("/matriculas", router);
