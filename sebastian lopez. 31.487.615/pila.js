//este es la pila


class Nodo {

    constructor(vlor) {
        this.vlor = vlor;
        this.siguiente = null;
    }



}

class pila {
    constructor() {
        this.primernodo = null;
        this.ultimonodo = null;
        this.longitud = 0
    }



    push(vlor) {

        const nuevonodo = new
            Nodo(vlor);

        if (!this.primernodo) {
            this.primernodo = nuevonodo;
            this.ultimonodo = nuevonodo;

        }
        else {
            nuevonodo.siguiente = this.primernodo;
            this.primernodo = nuevonodo;
        }

        this.longitud++;

    }


    Pop() {
        if (!this.primernodo)
            return null;

        const Nodoeliminao = this.primernodo;
        this.primernodo = Nodoeliminao.siguiente;
        Nodoeliminao.siguiente = null;
        this.longitud--;
        return Nodoeliminao.vlor;

    }

    isEmpty() {

        return this.longitud === 0;
    }

    size() {
        return this.longitud;
    }

    printStack() {
        let actuaal = this.primernodo;
        while (actuaal) {
            console.log(actuaal.vlor);
            actuaal = actuaal.siguiente;

        }
    }
}


const mipila = new pila();
mipila.push(10);
mipila.push(20);
mipila.push(30);
mipila.push(50);

console.log(" elementos en  la pila");
mipila.printStack();
console.log("tamaño de la pila", mipila.size());
console.log("elemento superior eliminado", mipila.Pop());
console.log(" la pila esta vacia", mipila.isEmpty());
