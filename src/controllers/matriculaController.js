const Aluno = require("../models/aluno");

exports.create = async (req, res) => {
  try {
    const { aluno_id, curso_id } = req.body;

    const aluno = await Aluno.findOneAndUpdate(
      { _id: aluno_id, "matriculas.curso": { $ne: curso_id } },
      { $push: { matriculas: { curso: curso_id } } },
      {
        new: true,
        select: "_id nome matriculas",
      }
    );

    return res.status(201).send(aluno);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Nao foi possivel criar a matricula" });
  }
};

exports.list = async (req, res) => {
  try {
    const aluno = await Aluno.find(
      { matriculas: { $ne: null } },
      "_id nome matriculas"
    ).populate("matriculas.curso", "nome");

    return res.send(aluno);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Nao foi possivel listar as matriculas" });
  }
};
