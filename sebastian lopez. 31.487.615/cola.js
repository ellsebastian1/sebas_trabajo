class nodo {
    constructor(vlor) {
        this.vlor = vlor;
        this.siguiente = null;
    }
}

class cola {
    constructor() {
        this.cabeza = null;
        this.tail = null;
        this.longitud = 0;
    }

    ponerencola(vlor) {
        const nuevonodo = new nodo(vlor);
        if (this.cabeza) {
            this.tail.siguiente = nuevonodo;

            this.tail = nuevonodo;
        } else {
            this.cabeza = nuevonodo;
            this.tail = nuevonodo;
        }
        this.longitud++;
    }



    estavacia() {
        return this.longitud === 0;
    }

    tamaño() {
        return this.longitud;
    }

    imprimircola() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.vlor);
            actual = actual.siguiente


        }

    }

}

const micola = new cola();
micola.ponerencola(30);
micola.ponerencola(20);
micola.ponerencola(10);

console.log(" elementos dentro de la cola");
micola.imprimircola();
console.log("tamaño de la cola", micola.tamaño());
console.log(" la cola esta vacia", micola.estavacia());


