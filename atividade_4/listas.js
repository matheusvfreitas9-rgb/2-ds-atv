// 1. ARRAYS 

// 1.1 Array Simples
const frutas = ["Maça", "banana", "laranja"];
// 1.2 FIFO (Fila)
const fila = ["ana", "beto", "caio", "daiane"];
fila.push("ellen");
const primeiro = fila.shift(); // primeiro item
console.log(primeiro);
// 1.3 FILO (pilha)
const pilha = ["inferno de dante", "one piece", "a quarta asa"];
pilha.push(" o alquimista");
const livro = pilha.pop();
console.log(livro);
// 1.4 Buscar se existe
const temlaranja = frutas.includes("laranja");
const temmanga = frutas.includes("manga");
console.log(temlaranja);
console.log(temmanga);

// 2. Sets (conjuntos)
// 2.1 adicionando duplicados
const matricula = new Set([1001, 1002, 1005, 1009, 1002]);
console.log([...matricula]);
//2.2 adicionar item
const cores = new Set(["verde", "azul"]);
cores.add("preto");
cores.add("branco");
cores.add("vermelho");
console.log([...cores]);
// 2.3 Buscar se Existe
const temverde = cores.has("verde");
const temamarelo = cores.has("amarelo");
console.log(temverde);
console.log(temamarelo);
// 2.4 Converter array em set
const convidados = ["bruno", "igor", "juliana", "bruno"];
const convidados_unicos = new Set(convidados);
console.log([...convidados_unicos]);

// 3. Map (Mapas)
// 3.1 Cadastro de preços
const produtos = new Map();
produtos.set("mouse", 50.00);
produtos.set("teclado", 120.00);
// 3.2 buscando um valor
valorMouse = produtos.get("Mouse");
console.log(valorMouse);