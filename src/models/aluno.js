const mongoose = require("../database/connection");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const MatriculaSchema = new Schema({
  curso: {
    type: ObjectId,
    ref: "Curso",
    require: true,
  },
  data_cadastro: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

const AlunoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  matriculas: {
    type: [MatriculaSchema],
    default: undefined,
  },
  data_cadastro: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

const Aluno = mongoose.model("Aluno", AlunoSchema);

module.exports = Aluno;
