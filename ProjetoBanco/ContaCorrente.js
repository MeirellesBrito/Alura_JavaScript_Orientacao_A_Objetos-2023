import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agincia; // Define a propriedade 'agincia'
    _cliente;
    //#saldo "#"Atributo privado
    _saldo = 0; // Define a propriedade 'saldo'

    //--------Assessores----------
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    
    get saldo(){
        return this._saldo
    }
   //----------------------------

   constructor(cliente, agincia){
        this.cliente = cliente;
        this.agincia = agincia; 
   }







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
