class personagem {
    constructor(nome, classe, vida, ataque, defesa) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}

class habilidade {
    constructor(id, nome, dano, tipo) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.tipo = tipo;
    }
}

// instanncia classes - criar objetos
let valkala = new personagem("R-01", "Guerreiro", 100, 20, 10);
let cerberus = new personagem("B-01", "Dragão", 150, 25, 15);

// prencher os status

document.getElementById("valkala").innerHTML = valkala.nome;
document.getElementById("cerberus").innerHTML = cerberus.nome;

// criar habilidades
let listahabilidades = [
    new habilidade(1, "Corte de Espada", 30, "Físico"),
    new habilidade(2, "Sopro de Fogo", 40, "Fogo"),
    new habilidade(3, "Investida", 25, "Físico"),
    new habilidade(4, "Garras Afiadas", 35, "Físico"),
    new habilidade(5, "Rajada de Vento", 20, "Vento")
]