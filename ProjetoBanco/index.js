import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente = new Cliente(); 
cliente.nome = "Fernando";
cliente.cpf = 3355544545454;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 33555455447745; 


const contaCorrente = new ContaCorrente();
contaCorrente.agincia = 1001;

contaCorrente.depositar(200);
contaCorrente.depositar(-100);

const valorSacado =  contaCorrente.sacar(50);
console.log(valorSacado);

console.log(contaCorrente);
