class Cliente { // Classe - molde
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente(); //Instancia da minha classe -- Objeto
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();
cliente2.nome = "Ingrid";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;


// const cliente2Nome = "Alice";
// const cliente2CPF = 88822233309;
// const cliente2Agencia = 1001;
// const cliente2Saldo = 0;

// const cliente3Nome = "Thiago";
// const cliente3CPF = 77722233309;
// const cliente3Agencia = 1001;
// const cliente3Saldo = 0;

console.log(cliente1, cliente2);