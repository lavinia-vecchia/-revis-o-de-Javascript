localStorage.setItem('nome', 'Maria');
localStorage.setItem('idade', '25');

const usuario = { nome: 'Maria', idade: 25 };
localStorage.setItem('usuario', JSON.stringify(usuario));

const nome = localStorage.getItem('nome');
const idade = parseInt(localStorage.getItem('idade'), 10);
const usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));

console.log('Nome:', nome); 
console.log('Idade:', idade); 
console.log('Usuário:', usuarioRecuperado); 

localStorage.removeItem('nome');