const { somar } = require("../../models/calculadora.js");

test("Testando 2 + 3", () => {
  const valor = somar(2, 3);
  expect(valor).toBe(5);
});
