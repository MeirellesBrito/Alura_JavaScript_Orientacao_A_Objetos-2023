export class ContaCorrente{
    agincia; // Define a propriedade 'agincia'
    cliente;

    //#saldo "#"Atributo privado
    _saldo = 0; // Define a propriedade 'saldo'
    

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }else{
            console.log("Saldo insuficiente")
        }
    }

    depositar(valor){
        if(valor <= 0){
                return;
            }
        this._saldo += valor;
    }

    tranferir(valor,conta){
        const valorSacao = this.sacar(valor);
        conta.depositar(valorSacao)
    }
}
