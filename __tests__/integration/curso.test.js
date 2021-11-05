const Curso = require("../../src/models/curso");

const dados_curso = { nome: "Carlos" };

describe("Curso", () => {
  it("Quando um curso é cadastrado, é gerada uma data de cadastro", async () => {
    const curso = await Curso.create(dados_curso);

    expect(curso).toHaveProperty("data_cadastro");
  });
});
