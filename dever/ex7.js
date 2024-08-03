// Declaração do objeto aluno
let aluno = {
    nome: "João",
    idade: 20,
    curso: "Engenharia",
    
    // Adicionando o método apresentacao
    apresentacao: function() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estou cursando ${this.curso}.`);
    }
};

// Chamando o método apresentacao
aluno.apresentacao();
