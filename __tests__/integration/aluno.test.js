const Aluno = require("../../src/models/aluno");

describe("Aluno", () => {
  it("Um aluno nao pode ser cadastrado caso o nome do aluno esteja vazio", async () => {
    let erro = false;

    try {
      await Aluno.create({ nome: "" });
    } catch (error) {
      erro = true;
    }

    expect(erro).toBeTruthy();
  }),
    it("Um aluno nao pode ser cadastrado caso o email do aluno esteja vazio", async () => {
      let erro = false;

      try {
        await Aluno.create({ email: "" });
      } catch (error) {
        erro = true;
      }

      expect(erro).toBeTruthy();
    }),
    it("Um aluno nao pode ser cadastrado caso já exista outro aluno cadastrado com o mesmo e-mail", async () => {
      const dados_aluno = { nome: "Carlos", email: "carlitos@gmail.com" };
      let existe_aluno = false;

      try {
        await Aluno.create(dados_aluno);
      } catch (error) {
        existe_aluno = true;
      }

      if (!existe_aluno) {
        try {
          await Aluno.create(dados_aluno);
        } catch (error) {
          existe_aluno = true;
        }
      }

      expect(existe_aluno).toBeTruthy();
    });
});
