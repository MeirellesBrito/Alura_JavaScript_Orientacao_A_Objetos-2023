
export class Cliente{ // Define uma classe Cliente
    nome; // Define a propriedade 'nome'
    _cpf; // Define a propriedade 'cpf'

    get cpf(){
       return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}


