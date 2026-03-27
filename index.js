// --- Operadores Aritméticos ---

// Soma
const num1 = 15;
const num2 = 25;
console.log(`A soma de ${num1} e ${num2} é: ${num1 + num2}`);

// Subtração
const subtracao = 50 - 25;
console.log(`O resultado da subtração de 50 por 25 é: ${subtracao}`);

// Multiplicação
const produto = 8 * 7;
console.log(`O produto de 8 vezes 7 é: ${produto}`);

// Divisão
const quociente = 100 / 4;
console.log(`O quociente de 100 dividido por 4 é: ${quociente}`);


// --- Operadores de Comparação (Relacionais) ---

// Igualdade
console.log(`O valor 10 é igual a 10? ${10 == 10}`);

// Diferença
const nome1 = "Ana";
const nome2 = "Bia";
console.log(`Os nomes "${nome1}" e "${nome2}" são diferentes? ${nome1 != nome2}`);

// Menor que
console.log(`O número 5 é menor que 10? ${5 < 10}`);

// Maior que
const preco = 65;
console.log(`O preço R$${preco} é maior que 50? ${preco > 50}`);

// Menor ou Igual
const valor = 20;
console.log(`O valor ${valor} é menor ou igual a 20? ${valor <= 20}`);

// Maior ou Igual
const idadeExemplo = 17;
console.log(`A idade ${idadeExemplo} é maior ou igual a 18? ${idadeExemplo >= 18}`);


// --- Operador Ternário ---

// Atribuição Condicional
const nota = 8.5;
const resultado = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(`Status do aluno: ${resultado}`);

// Verificação de Maioridade
const idadePessoa = 20;
const statusPessoa = idadePessoa >= 18 ? "adulto" : "menor";
console.log(`A pessoa é considerada: ${statusPessoa}`);


// --- Template Literals ---

// Placeholder
const nomeUsuario = "Carlos";
console.log(`Olá, ${nomeUsuario}!`);

// Legibilidade
const produtoNome = "Teclado Mecânico";
const precoUnitario = 250;
const quantidade = 2;
console.log(`Você comprou ${quantidade} unidades de "${produtoNome}" por R$${precoUnitario} cada, totalizando R$${quantidade * precoUnitario}.`);


// --- Mensagem Personalizada Completa ---

const nomeFinal = "Mariana";
const idadeFinal = 16;
const classificacao = idadeFinal >= 18 ? "maior de idade" : "menor de idade";
const mensagem = `Olá ${nomeFinal}, verificamos que você tem ${idadeFinal} anos e é ${classificacao}.`;

console.log(mensagem);
