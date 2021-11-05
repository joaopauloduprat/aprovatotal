const express = require("express");

const Curso = require("../models/curso");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { nome, _id } = await Curso.create(req.body);

    return res.status(201).send({ nome, _id });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Nao foi possivel criar o curso" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const curso_id = req.params.id;

    const curso = await Curso.findByIdAndUpdate(curso_id, req.body, {
      new: true,
      select: "_id nome",
    });

    return res.send(curso);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Nao foi possivel atualizar o curso" });
  }
});

router.get("/", async (req, res) => {
  let filter = req.query;

  if (!filter.nome) filter = {};

  try {
    const curso = await Curso.find(filter, "_id nome");

    return res.send(curso);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Nao foi possivel listar os cursos" });
  }
});

module.exports = (app) => app.use("/cursos", router);
