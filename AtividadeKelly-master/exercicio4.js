var pessoas = [{ nome: "Alice", idade:25},
{nome: "Bob", idade: 30 }, { nome: "Charlie", idade: 35}]

const nomes = pessoas.map(pessoa => pessoa.nome)
console.log(nomes)