/*
    COMO USAR:

    1º Crear una matriz (const miMatriz = new Matrix(<Array>))

    UTILIDADES:

    Añadir una fila a la matriz -> miMatriz.addRow(<Array>)
    Añadir una columna a la matriz -> miMatriz.addColumn(<Array>)
    Multiplicar la matriz por una constante -> miMatriz.scalarMult(<Number>)
    Sumar 2 matrices -> miMatriz.sum(<Matriz>, <String>) donde <String> debe ser '+' o '-'
    Multiplicar 2 matrices -> miMatriz.multiply(<Matriz>)
    Calcular el cuadrado de la matriz -> miMatriz.square()

    (En todos los casos se compueba que la operación sea realizable, no es necesario asegurarlo "a mano")

    LAS MATRICES PUESTAS DE EJEMPLO SON MULTIPLICABLES, PERO NO SUMABLES
*/

class Matrix {
    constructor(mat) {
        this.matrix = mat
    }

    addRow(arr) {
        if (this.matrix[0].length != arr.length) {
            console.log("La fila debe contener el mismo número de números que las otras filas")
            return
        }
        this.matrix.push(arr) //Para añadir una fila a nuestra matriz sólo hace falta añadir un array al final de ella
    }

    //Para añadir una columna hay que añadir al final de cada línea el valor de la columna en la posición de la fila
    addColumn(arr) {
        let rows = this.matrix.length
        let cols = arr.length;

        if (rows != cols) { console.log("Debes poner una columna que tenga la misma cantidad de números que las demás columas"); return; }

        for (let i = 0; i < rows; i++) {
            this.matrix[i].push(arr[i])
        }
    }

    //Para multiplicar una matriz por un número hay que multiplicar todos los elementos de la misma por ese número
    scalarMult(scalar) {
        let rows = this.matrix.length;
        let cols = this.matrix[0].length;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.matrix[i][j] *= scalar
            }
        }
    }

    //Para poder sumar dos matrices estas deben tener las mismas dimensiones. Hay que sumar cada numero con aquel que esté en la misma posición de la otra matriz
    sum(mat, op) {
        //Filas y columnas de nuestra matriz
        let rows = this.matrix.length;
        let cols = this.matrix[0].length;

        //Filas y columnas de la otra matriz
        let oRows = mat.length;
        let oCols = mat[0].length;

        //Se comprueba si la dimensión de las dos matrices es la misma
        if (rows != oRows || cols != oCols) {
            console.log('LAS MATRICES NO SON SUMABLES')
            return
        }

        //Si es suma, se suman
        if (op == '+') {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    this.matrix[i][j] += mat[i][j]
                }
            }
        } else if (op == '-') {
            //Si es una resta se restan
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    this.matrix[i][j] -= mat[i][j]
                }
            }
        } else {
            //Si no es ni una suma ni una resta, se descarta la operación
            console.log('LA OPERACIÓN NO ESTÁ PERMITIDA')
        }
    }

    multiply(mat) {
        let rows = this.matrix.length; //Filas de esta matriz
        let cols = this.matrix[0].length; //Columnas de esta matriz
        let oRows = mat.length //Filas de la otra matriz
        let oCols = mat[0].length //Columnas de la otra matriz

        //Para que una matriz pueda ser multiplicada por otra el número de columnas de la primera debe ser igual al número de filas de la segunda
        if (cols != oRows) {
            console.log('LAS MATRICES NO PUEDEN SER MULTIPLICADAS')
            return
        }

        const result = new Array(rows); //Array donde se irán guardando los valores según se vayan calculando

        //Multiplicar cada numero (fila * columna) y sumarlos entre ellos -> Ponerlos en la posición del Array temporal en la posición en la que corresponda
        for (let i = 0; i < rows; i++) {
            result[i] = new Array(oCols);
            for (let j = 0; j < oCols; j++) {
                result[i][j] = 0;
                for (let k = 0; k < cols; k++) {
                    result[i][j] += this.matrix[i][k] * mat[k][j];
                }
            }
        }

        //Actualizar la matriz original con el resultado de la matriz nueva
        this.matrix = result
    }
    square() {
        this.multiply(this.matrix) //Multiplicar la matriz por si misma
    }
}

//Esta matriz es solo una de demostración, para usar todas las funcionalidades se deben crear más matrices, que además deben ser las apropiadas para cada tipo de operación
let matriz = [
    [1, 2, 1],
    [2, 0, 1],
    [1, 2, 0]
]

//Crear una instacia de la matriz
const m = new Matrix(matriz)
m.addRow([1, 2])

console.log(m)
