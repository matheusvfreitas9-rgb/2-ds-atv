class ContaBancaria {
    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }
     verSaldo() {
        console.log(`O saldo da conta é: R$${this.saldo.toFixed(2)}`);
   }
}



let conta1 = new ContaBancaria("12345-6", "João Silva", 1500.00);
conta1.verSaldo();

depositar(valor) 
        this.saldo += valor;
   
    
