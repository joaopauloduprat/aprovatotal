const Aluno = require("../../src/models/aluno");

const dados_aluno = { nome: "Carlos", email: "carlitos@gmail.com" };

describe("Aluno", () => {
  it("Quando um aluno é cadastrado, é gerada uma data de cadastro", async () => {
    const aluno = await Aluno.create(dados_aluno);

    expect(aluno).toHaveProperty("data_cadastro");
  });
});
