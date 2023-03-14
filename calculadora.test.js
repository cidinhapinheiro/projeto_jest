const { calculadora } = require("./calculadora")

test('soma de 2 números:', function() {
    expect(calculadora.soma(3,2)).toBe(5);
});

test('subtracao de 2 números:', function() {
    expect(calculadora.subtracao(6,3)).toBe(3)
})

test('multiplicacao de 2 números :', function() {
    expect(calculadora.multiplicacao(2,3)).toBe(6)
})

test('divisao de 2 números:', function() {
    expect(calculadora.divisao(6,3)).toBe(2)
})