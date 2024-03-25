//Creamos un nodo

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
    }

    getSize(){
        return this.size;
    }    

    isEmpty(){
        return this.size === 0;
    }

    insertFirst(data){
        const node = new Node(data);
        if (this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertLast(data){
        const node = new Node(data);
        if (this.isEmpty()){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insert(data, index){
        if (index < 0 || index > this.size){
            console.log("Índice inválido");
            return;
        }
        if (index === 0){
            this.insertFirst(data);
        } else {
            const node = new Node(data);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeIndex(index){
        if (index < 0 || index >= this.size) {
            console.log("Índice inválido.");
            return null;
        }
        if (index === 0){
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++){
                 prev = prev.next;
            }
            prev.next = prev.next.next;
        }
        this.size--;
    }

    searchIndex(index){
        if (index < 0 || index > this.size) {
            console.log("Índice inválido.");
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current.data;
    }

    printAll(){
        if (this.isEmpty()){
            console.log("La lista está vacía");
           
        } else {
            let current = this.head;
            let result = "";
            while(current){
                result += current.data + ' -> ';
                current = current.next;
            }
            console.log(result + ' null')
        }
        
    }
    removeValue(data) { 
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.data === data) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return null;
    }

    searchValue(data) { 
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

}

let lista = new LinkedList();
console.log(lista.isEmpty());
lista.printAll();
lista.insertFirst(1);
lista.printAll();
lista.insertLast(3); 
lista.printAll();
lista.insertFirst(5);
lista.printAll()
lista.insertLast(8);
lista.printAll();
lista.insert(7, 3);
lista.printAll();
lista.removeIndex(3);
lista.searchValue(3);
lista.removeValue(2);
lista.printAll();
lista.insert({
    nombre: "George Bush",
    categoria: "Terrorista"
}, 2)
console.log(lista.searchIndex(2));
console.log(lista.searchValue(3));
console.log(lista.removeValue(1));