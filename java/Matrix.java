/* Calculadora de matrices
 * Para definir la matriz principal Matrix matrizPrincipal = new Matrix(int[][])
 * Para sumar dos matrices matrizPrincipal.suma(<Matriz sumando>) (Matriz sumando = int[][])
 * Para restar es igual que en la suma pero con matrizPrincipal.resta(<Matriz sustraendo>)
 * Para multiplicar dos matrices matrixPrincipal.multiplicar(matrizB) (matrizB = int[][])
 * En el ejemplo aportado solo se definen dos matrices multiplicables
 */

public class Matrix {
    protected int[][] matrix;
    //Código principal que se ejecutará
    public static void main(String []args) {
        int[][] matriz = {
            {1,2,1},
            {2,0,1}
        };

        int[][] multiplicador = {
            {1,2},
            {2,1},
            {0,1}
        };

        Matrix m = new Matrix(matriz);
        m.multiplicar(multiplicador);
    }

    //Constructor de la class Matrix
    public Matrix(int[][] mat) {
        this.matrix = mat; //Guardar en la variable matrix la matriz introducida por el usuario
    }

    //Escribir la matriz en la consola, ya que por defecto se genera un código en lugar de la representación deseada
    public void WriteMatrix() {
        for(int i = 0; i<matrix.length; i++) {
            for(int j = 0; j<matrix[0].length; j++) {
                System.out.print(matrix[i][j]); //Escribir cada linea de la matriz
                System.out.print(',');
            }
            System.out.println(); //Al acabar la fila de la matriz hacer un salto de línea
        }
    }

    //Sumar dos matrices
    public void suma(int[][] sumando) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        int oRows = sumando.length;
        int oCols = sumando[0].length;

        if(rows != oRows || cols != oCols) { return; } //Comprobar que las matrices sean de las mismas dimensiones, si no lo son no se pueden sumar
        

        for(int i = 0; i<rows; i++) {
            for(int j = 0; j<cols; j++) {
                matrix[i][j] += sumando[i][j];
            }
        }
        WriteMatrix();        
    }

    public void resta(int[][] sustraendo) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        int oRows = sustraendo.length;
        int oCols = sustraendo[0].length;

        if(rows != oRows || cols != oCols) { return; } //Comprobar que las matrices sean de las mismas dimensiones, si no lo son no se pueden restar
        

        for(int i = 0; i<rows; i++) {
            for(int j = 0; j<cols; j++) {
                matrix[i][j] -= sustraendo[i][j];
            }
        }
        WriteMatrix();        
    }

    public void multiplicar(int[][] multiplicador) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        int oRows = multiplicador.length;
        int oCols = multiplicador[0].length;

        if(cols != oRows) { return; } // Comprobar si el número de columnas de la matriz tiene el mismo número de filas que la segunda matriz, de modo que sean multiplicables

        int[][] result = new int[rows][oCols];

        for(int i = 0; i<rows; i++) {
            result[i] = new int[oCols];
            for(int j = 0; j<oCols; j++) {
                result[i][j] = 0;
                for(int k = 0; k<cols; k++) {
                    result[i][j] += matrix[i][k] * multiplicador[k][j];
                }
            }
        }

        matrix = result;

        WriteMatrix();
    }
}
