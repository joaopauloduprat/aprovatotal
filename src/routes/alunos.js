const express = require("express");
const router = express.Router();

const aluno_controller = require("../controllers/alunoController");

router.post("/", aluno_controller.create);

router.patch("/:id", aluno_controller.update);

router.get("/", aluno_controller.list);

module.exports = (app) => app.use("/alunos", router);
