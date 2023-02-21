import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Fernando", 1111111122); 
const cliente2 = new Cliente("Alice", 33555455447745);

const contaCorrente = new ContaCorrente(1001, cliente1);
contaCorrente.depositar(500);
const conta2 = new ContaCorrente(102,cliente2);


let valor = 200;
contaCorrente.tranferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas)