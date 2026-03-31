// .map(): cria uma lista com os dados alterados
const metros = [1, 5, 10];
const centimetros = metros.map(m => m * 100);
centimetros.forEach(c => console.log(`*${c}cm`));

// .filter(): Cria uma lista com os itens especificados
const notas = [8, 4, 9, 5];
const notas_baixas = notas.filter(n => n < 6);
notas_baixas.forEach(n => console.log(n));

// .find(): Retorna apenas o primeiro item que passa na condição
const alunos = ["joão", "Maria", "José"];
const busca = alunos.find(nome => nome === "Maria");
console.log(busca);

// .every(): Retorna se todos passam no predicado
const entregas = [true, true, false];
const todosEntregaram = entregas.every(e => e === true);
console.log(todosEntregaram);

// .toUpperCase .tolowerCase():
//      coloca as letras em maiúsculas/minúsculas
const nomes = ["ana", "bia"];
const maiusculas = nomes.map(n => n.toUpperCase());
nomes.forEach(n => console.log(n.toUpperCase()));
nomes.map(n => n.toLowerCase())
    .forEach(n => console,log(n));

// .startWith() e .endWith():
//      verifica se a string começa ou termina com o termo especificado
const arquivos = ["foto.jpg", "texto.txt", "ferias.jpg"];
const apenasFotos = arquivos
                       .filter(arq => arq.startsWith(".jpg"));
apenasFotos.forEach(arq => console.log(arq));

// .includes(): verifica se um texto contém outro
const produtos = ["monitor dell", "mouse razer", "teclado dell"];
produtos
        .filter(p => p.includes("dell"))
        .map(s => s.toUpperCase())
        .forEach(p => console.log(i));

// .replace(): substitui um termo por outro
let telefone = "(11) 98765-4321";
const escondido = telefone.replace("(11)", "(**)");
console.log(escondido);