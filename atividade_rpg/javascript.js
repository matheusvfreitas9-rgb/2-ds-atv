class Personagem {

    constructor(nome, classe, vida, ataque, defesa, mana, energia) {

        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.mana = mana;
        this.energia = energia;

    }

    atacar(alvo, habilidade) {

        if (
            this.mana >= habilidade.custo &&
            this.energia >= habilidade.energia
        ) {

            alvo.vida -= habilidade.dano;

            // gastar mana
            if (habilidade.custo > 0) {

                this.mana -= habilidade.custo;

                this.energia += 50;

            }

            // gastar energia
            this.energia -= habilidade.energia;

            console.log(
                `${this.nome} usou ${habilidade.nome} em ${alvo.nome}`
            );

            console.log(
                `${alvo.nome} ficou com ${alvo.vida} HP`
            );

        } else {

            console.log("Sem mana ou energia.");

        }

    }

}

class Habilidade {

    constructor(id, nome, dano, custo, energia) {

        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;

    }

}

// ===============================
// PERSONAGENS
// ===============================

let valkala = new Personagem(
    "R-01",
    "⚔️ Guerreiro",
    100,
    20,
    10,
    100,
    100
);

let cerberus = new Personagem(
    "B-01",
    "🐉 Dragão",
    150,
    25,
    15,
    100,
    100
);

// ===============================
// MOSTRAR INFORMAÇÕES
// ===============================

document.getElementById("valkala").textContent =
    valkala.nome;

document.getElementById("classe-valkala").textContent =
    valkala.classe;

document.getElementById("cerberus").textContent =
    cerberus.nome;

document.getElementById("classe-cerberus").textContent =
    cerberus.classe;

// ===============================
// HABILIDADES
// ===============================

let listaHabilidades = [

    new Habilidade(
        1,
        "⚔️ Ataque",
        4,
        0,
        0
    ),

    new Habilidade(
        2,
        "🪙 Skill",
        8,
        10,
        0
    ),

    new Habilidade(
        3,
        "💥 Supremo",
        15,
        0,
        100
    )

];

// ===============================
// BOTÕES
// ===============================

let container = document.getElementById("controles");

listaHabilidades.forEach(hab => {

    let btn = document.createElement("button");

    btn.innerText = hab.nome;

    btn.classList.add("btn", "btn-primary");

    btn.addEventListener("click", () => {

        valkala.atacar(cerberus, hab);

        atualizarTela();

    });

    container.appendChild(btn);

});

// ===============================
// ATUALIZAR TELA
// ===============================

const atualizarTela = () => {

    document.getElementById("hp-boss").value =
        cerberus.vida;

    document.getElementById("mp-hero").value =
        valkala.mana;

    document.getElementById("en-hero").value =
        valkala.energia;

};

// iniciar
atualizarTela();