const Aluno = require("../models/aluno");

exports.create = async (req, res) => {
  try {
    delete req.body.matriculas;

    const { _id, nome, email } = await Aluno.create(req.body);

    return res.status(201).send({ _id, nome, email });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Nao foi possivel criar o aluno" });
  }
};

exports.update = async (req, res) => {
  try {
    const aluno_id = req.params.id;
    const aluno = await Aluno.findByIdAndUpdate(aluno_id, req.body, {
      new: true,
      select: "_id nome email",
    });

    return res.send(aluno);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Nao foi possivel atualizar o aluno" });
  }
};

exports.list = async (req, res) => {
  let filter = req.query;

  if (!filter.nome) filter = {};

  try {
    const aluno = await Aluno.find(filter, "_id nome email");

    return res.send(aluno);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Nao foi possivel listar os alunos" });
  }
};
