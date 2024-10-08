#include "Nodo.h"
#include "Nodo.cpp"
#include "Pila.h"
#include "Pila.cpp"
#include <iostream>

using namespace std;

int main() {
	Pila p;

	p.push(1);
	p.push(2);
	p.push(3);

	Pila sec;

	sec.push(4); 
	sec.push(5); 
	sec.push(6); 
	
	cout << "Concatenar: " << endl;
	p.concat(sec);
	
	p.reverse();
	p.showAll();
	cout << p.isOrder() << endl;

	return 0;
}
