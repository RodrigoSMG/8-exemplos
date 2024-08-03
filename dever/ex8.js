// Declaração do array numeros
let numeros = [1, 2, 3, 4, 5];

// Usando o método map para criar um novo array com os valores dobrados
let numerosDobrados = numeros.map(numero => numero * 2);
console.log("Números dobrados:", numerosDobrados);

// Usando o método filter para criar um novo array apenas com os valores maiores que 2
let numerosMaioresQueDois = numeros.filter(numero => numero > 2);
console.log("Números maiores que 2:", numerosMaioresQueDois);
