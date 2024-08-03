// Criando a variável dataAtual
let dataAtual = new Date();

// Criando a variável dataNascimento
let dataNascimento = new Date("1990-08-03");

// Calculando a diferença em anos
let anos = dataAtual.getFullYear() - dataNascimento.getFullYear();
let mes = dataAtual.getMonth() - dataNascimento.getMonth();
if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
    anos--;
}

// Exibindo o resultado
console.log("Idade:", anos, "anos");
