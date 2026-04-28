class animal {
    constructor(tobi) {
        this.tobi = tobi;
    }
    falar(som) {
        console.log(som);
    }
}

class gato extends animal {
    rornar() {
        console.log("ronronar");
    }
}

class cachorro extends animal {
    abanarrabo() {
        console.log("abanar o rabo");
    }
}

let meuGato = new gato("Tobi");
let meuCachorro = new cachorro("Rex");

meuGato.falar("miau");
meuGato.rornar();
meuCachorro.falar("au au");
meuCachorro.abanarrabo();