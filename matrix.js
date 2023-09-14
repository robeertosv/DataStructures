class Matrix {
    constructor(mat) {
        this.matrix = mat
    }

    addRow(arr) {
        this.matrix.push(arr) //Para añadir una fila a nuestra matriz sólo hace falta añadir un array al final de ella
    }

    //Para añadir una columna hay que añadir al final de cada línea el valor de la columna en la posición de la fila
    addColumn(arr) {
        let rows = this.matrix.length

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
}

let matriz = [
    [1, 2, 1],
    [2, 0, 1]
]
let matriz2 = [
    [1, 2],
    [2, 1],
    [0, 1]
]

const m = new Matrix(matriz)
m.multiply(matriz2)

console.log(m)