// Declaração da variável
let estaFrio = true;

// Verificação do valor da variável
if (estaFrio) {
    console.log("Está frio.");
} else {
    console.log("Não está frio.");
}

// Invertendo o valor da variável
estaFrio = !estaFrio;
console.log("Está frio agora?", estaFrio);

// Declaração de outra variável
let estaQuente = false;

// Combinando as variáveis com operadores lógicos
let condicaoAnd = estaFrio && estaQuente;
let condicaoOr = estaFrio || estaQuente;

console.log("Está frio E está quente?", condicaoAnd);
console.log("Está frio OU está quente?", condicaoOr);
