localStorage.setItem('nome', 'Maria');
localStorage.setItem('idade', '25');
localStorage.setItem('usuario', JSON.stringify({ nome: 'Maria', idade: 25 }));

console.log('Nome:', localStorage.getItem('nome'));
console.log('Idade:', parseInt(localStorage.getItem('idade'), 10)); 
console.log('Usuário:', JSON.parse(localStorage.getItem('usuario'))); 

localStorage.removeItem('nome');
