import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); 
cliente1.nome = "Fernando";
cliente1.cpf = 3355544545454;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 33555455447745; 


const contaCorrente = new ContaCorrente();
contaCorrente.agincia = 1001;
contaCorrente.cliente = cliente1
contaCorrente.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agincia = 102;

let valor = 200
contaCorrente.tranferir(valor, conta2);
console.log("valor: ", valor);
console.log(conta2);

