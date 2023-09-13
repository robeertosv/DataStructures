//Árbol binario

//Se define el nodo
class node {
    constructor(value) {
        this.value = value //Valor del nodo
        this.left = null //El nodo a su izquierda
        this.right = null //El nodo a su derecha
    }

    add(value) { value > this.value ? this.addRight(value) : this.addLeft(value) } //Si el valor que queremos meter es mayor al valor del nodo lo añadimos a la derecha, si no a la izquierda

    addLeft(value) { this.left ? this.left.add(value) : this.left = new node(value) } // Si ya hay un nodo a la izquierza volvemos a mirar si es mayor o menor, si no hay creamos un nodo nuevo con ese valor

    addRight(value) { this.right ? this.right.add(value) : this.right = new node(value) } // Si ya hay un nodo a la derecha volvemos a mirar si es mayor o menor, si no hay creamos un nodo nuevo con ese valor
}

const head = new node(5); //Creamos en nodo root (En este caso con el número 5)

const num = [9, 4, 7, 2, 3, 1, 8, 6] //Definimos todos los números que queremos ordenar

//Usamos head.add para añadir el número
for(let i = 0; i<num.length+2; i++) {
    head.add(num[i])
}

//Una vez acabado mostramos el árbol
console.log(head)