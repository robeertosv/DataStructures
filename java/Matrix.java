/* Calculadora de matrices
 * Para definir la matriz principal Matrix matrizPrincipal = new Matrix(int[][])
 * Para sumar dos matrices matrizPrincipal.suma(<Matriz sumando>, operador) (Matriz sumando = int[][]) (operador<Char> -> '+' o '-')
 * Para multiplicar dos matrices matrixPrincipal.multiplicar(matrizB) (matrizB = int[][])
 * Para calcular el cuadrado de la matriz. matrizPrincipal.square()
 * Para multiplicar una matriz por un número -> matrizPrincipal.scalar(<Integer>)
 * En el ejemplo aportado solo se definen dos matrices multiplicables
 */

public class Matrix {
    protected int[][] matrix;

    // Código principal que se ejecutará
    public static void main(String[] args) {
        int[][] matriz = {
                { 1, 2, 1 },
                { 2, 0, 1 },
        };

        int[][] multiplicador = {
                { 1, 2 },
                { 2, 1 },
                { 0, 1 }
        };

        Matrix m = new Matrix(matriz); // Crear la matriz sobre la que se trabajará
        m.scalar(2);
    }

    // Constructor de la class Matrix
    public Matrix(int[][] mat) {
        this.matrix = mat; // Guardar en la variable matrix la matriz introducida por el usuario
    }

    // Escribir la matriz en la consola, ya que por defecto se genera un código en
    // lugar de la representación deseada
    public void WriteMatrix() {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j]); // Escribir cada linea de la matriz
                System.out.print("  "); // Separador de números para identificar bien cada elemento
            }
            System.out.println(); // Al acabar la fila de la matriz hacer un salto de línea
        }
    }

    public void scalar(int scalar) {
        for(int i = 0; i<matrix.length; i++) {
            for(int j = 0; j<matrix[0].length; j++) {
                matrix[i][j] *= scalar;
            }
        }

        WriteMatrix();
    }
    // Sumar dos matrices
    public void suma(int[][] matrizB, char operador) {
        int rows = matrix.length; // Almacenar las filas de la matriz "principal"
        int cols = matrix[0].length; // Almacenar las columnas de la matriz "principal"

        int oRows = matrizB.length; // Almacenar las filas de la matriz que se va a sumar / restar
        int oCols = matrizB[0].length; // Almacenar las columnas de la matriz que se va a sumar / restar

        if (rows != oRows || cols != oCols) {
            return;
        } // Comprobar que las matrices sean de las mismas dimensiones, si no lo son no se
          // pueden sumar

        if (operador == '+') {
            for (int i = 0; i < rows; i++) {
                for (int j = 0; j < cols; j++) {
                    matrix[i][j] += matrizB[i][j]; // Sumar a cada elemento de la matriz "principal" el elemento que le
                                                   // corresponde en la matriz sumando, y guardar su valor
                }
            }
        } else if (operador == '-') {
            for (int i = 0; i < rows; i++) {
                for (int j = 0; j < cols; j++) {
                    matrix[i][j] -= matrizB[i][j];
                }
            }
        } else {
            System.out.println("Las operaciones válidas son '+' y '-'");
        }

        WriteMatrix(); // Mostrar la matriz en la consola
    }

    public void multiplicar(int[][] multiplicador) {
        int rows = matrix.length; // Numero de filas de la matriz "principal"
        int cols = matrix[0].length; // Número de columnas de la matriz "principal"

        int oRows = multiplicador.length; // Número de filas de la matriz por la que se va a multiplicar
        int oCols = multiplicador[0].length; // Número de columnas de la matriz por la que se va a multiplicar

        if (cols != oRows) {
            return;
        } // Comprobar si el número de columnas de la matriz tiene el mismo número de
          // filas que la segunda matriz, de modo que sean multiplicables

        int[][] result = new int[rows][oCols];

        // Multiplicar la matriz
        for (int i = 0; i < rows; i++) {
            result[i] = new int[oCols];
            for (int j = 0; j < oCols; j++) {
                result[i][j] = 0;
                for (int k = 0; k < cols; k++) {
                    result[i][j] += matrix[i][k] * multiplicador[k][j];
                }
            }
        }

        matrix = result;

        WriteMatrix(); // Mostrar la matriz en la consola
    }

    public void square() {
        multiplicar(matrix);
    }
}