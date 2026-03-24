// 1. lista de termos (portugês)
const termosPT = 
["Bem-vindo", "Carrinho", "Sair"];

// 2. lista de termos (inglês)
const termosEN = new Map([
    ["bem-vindo", "welcome"],
    ["carrinho", "cart"],
    ["sair", "logout"]
]);

// 3. lista de termos (espanhol)
const termosES = new Map([
    ["bem-vindo", "bienvenido"],
    ["carrinho", "carrito"],
    ["sair", "salir"]
]);

// 4. escolher o idioma
const idioma_selecionado = termosEN;
//5. gerar termos treduzidos
const traducao = 
termosPT.map(termo => idioma_selecionado.get(termo));
console.log(traducao[0]);
console.log(traducao[1]);
console.log(traducao[2]); 



