import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
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

   constructor(agincia,cliente){
        this.agincia = agincia; 
        this.cliente = cliente;
        ContaCorrente.numeroDeContas +=1;
        
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
