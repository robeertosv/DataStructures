//Stack (Last In First Out)

//Creamos la clase stack
class Stack {
    constructor() {
        this.list = [] //Se va a iniciar con un Array vacío
    }

    //Añadir items al final del array (Last in)
    add(item) {
        this.list.push(item)
    }

    //Quitar el último item que se añadió (First Out)
    quit(item) {
        this.list.pop()
    }
}

//Crear la instancia del stack
const stack = new Stack


//Lista con los valores que se van a añadir
const values = [1,4,8,9,6,4]

for(let i = 0; i<values.length; i++) {
    stack.add(values[i])
}

//Quitar los dos últimos valores 
stack.quit()
stack.quit()

//Mostrar la lista que a quedado al final de las instrucciones
console.log(stack.list)