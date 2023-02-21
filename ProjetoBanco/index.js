// Define uma classe Cliente
class Cliente{
    nome; // Define a propriedade 'nome'
    cpf; // Define a propriedade 'cpf'
    agincia; // Define a propriedade 'agincia'
    saldo; // Define a propriedade 'saldo'
    rg; // Define a propriedade 'rg'
}

const cliente = new Cliente(); // Cria uma nova instância da classe Cliente e armazena em uma variável chamada 'cliente'
const cliente2 = new Cliente();// Cria uma nova instância da classe Cliente e armazena em uma variável chamada 'cliente2'

cliente.nome = "Fernando"// Define a propriedade 'nome' do objeto 'cliente' como 'Fernando'
cliente.cpf = 03355545;// Define a propriedade 'cpf' do objeto 'cliente' como 3355545
cliente.agincia = 1001;// Define a propriedade 'agincia' do objeto 'cliente' como 1001
cliente.saldo = 1000;// Define a propriedade 'saldo' do objeto 'cliente' como 1000
cliente.rg = 28555487;// Define a propriedade 'rg' do objeto 'cliente' como 28555487

cliente2.nome = "Alice"// Define a propriedade 'nome' do objeto 'cliente2' como 'Alice'
cliente2.cpf = 03355545;// Define a propriedade 'cpf' do objeto 'cliente2' como 3355545
cliente2.agincia = 1001;// Define a propriedade 'agincia' do objeto 'cliente2' como 1001
cliente2.saldo = 1000;// Define a propriedade 'saldo' do objeto 'cliente2' como 1000


// Imprime no console os objetos 'cliente2' e 'cliente'
console.log(cliente2, cliente);
