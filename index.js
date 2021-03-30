class Cliente { // Classe - molde
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo > valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente(); //Instancia da minha classe -- Objeto
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Ingrid";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.sacar(50);

console.log(cliente1, cliente2);