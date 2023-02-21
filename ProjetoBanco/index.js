// Define uma classe Cliente
class Cliente{
    nome; // Define a propriedade 'nome'
    cpf; // Define a propriedade 'cpf'
}

class ContaCorrente{
    agincia; // Define a propriedade 'agincia'
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
}




const cliente = new Cliente(); // Cria uma nova instância da classe Cliente e armazena em uma variável chamada 'cliente'
cliente.nome = "Fernando"// Define a propriedade 'nome' do objeto 'cliente' como 'Fernando'
cliente.cpf = 03355545;// Define a propriedade 'cpf' do objeto 'cliente' como 3355545

const cliente2 = new Cliente();// Cria uma nova instância da classe Cliente e armazena em uma variável chamada 'cliente2'
cliente2.nome = "Alice"// Define a propriedade 'nome' do objeto 'cliente2' como 'Alice'
cliente2.cpf = 03355545;// Define a propriedade 'cpf' do objeto 'cliente2' como 3355545



const contaCorrente = new ContaCorrente();
contaCorrente.agincia = 1001;

contaCorrente.depositar(200);
contaCorrente.depositar(-100);
const valorSacado =  contaCorrente.sacar(50);
console.log(valorSacado);

console.log(contaCorrente);
