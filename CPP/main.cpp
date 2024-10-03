#include "NodoPila.h"
#include "NodoPila.cpp"
#include "Pila.h"
#include "Pila.cpp"
#include <iostream>
using namespace std;

int main() {
	cout << "Crear pila vacía: " << endl;
	Pila p; p.viewCima();

	cout << "Añadir el 1 a la pila: " << endl;
	p.push(1); p.viewCima();

	cout << "Añadir el 2 a la pila: " << endl;
	p.push(2); p.viewCima();

	cout << "Pop: " << endl;
	p.pop(); p.viewCima();
       
	cout << "Pop: " << endl;
	p.pop(); p.viewCima();

	return 0;
}
