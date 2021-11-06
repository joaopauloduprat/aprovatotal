const Curso = require("../../src/models/curso");

const nome_curso = "Historia";

describe("Curso", () => {
  it("Um curso nao pode ser cadastrado caso o nome do curso esteja vazio", async () => {
    let erro = false;

    try {
      await Curso.create({ nome: "" });
    } catch (error) {
      erro = true;
    }

    expect(erro).toBeTruthy();
  }),
    it("Um curso nao pode ser cadastrado caso já exista outro curso cadastrado com o mesmo nome", async () => {
      let existe_curso = false;

      try {
        await Curso.create(nome_curso);
      } catch (error) {
        existe_curso = true;
      }

      if (!existe_curso) {
        try {
          await Curso.create(nome_curso);
        } catch (error) {
          existe_curso = true;
        }
      }

      expect(existe_curso).toBeTruthy();
    });
});
