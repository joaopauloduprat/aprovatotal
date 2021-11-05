const express = require("express");
const router = express.Router();

const curso_controller = require("../controllers/cursoController");

router.post("/", curso_controller.create);

router.patch("/:id", curso_controller.update);

router.get("/", curso_controller.list);

module.exports = (app) => app.use("/cursos", router);
