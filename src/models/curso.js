const mongoose = require("../database/connection");

const CursoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  data_cadastro: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

const Curso = mongoose.model("Curso", CursoSchema);

module.exports = Curso;
