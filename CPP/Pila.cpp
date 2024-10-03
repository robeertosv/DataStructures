#include "NodoPila.h"
#include "Pila.h"
#include <iostream>

using namespace std;

Pila::Pila() {
	cima = NULL;
}

Pila::~Pila() {
	while(cima) pop();
}

void Pila::pop() {
	pnodo nodo;
	
	if(cima) {
		nodo = cima;
		cima = nodo->next;
		delete nodo;
	}
}

void Pila::push(int n) {
	pnodo nuevo = new NodoPila(n, cima);
	cima = nuevo;
}

bool Pila::isEmpty() {
	return cima == NULL;
}

void Pila::viewCima() {
	if(isEmpty()) {
		cout << "La pila está vacía" << endl;
	} else {
		cout << "Cima de la pila: " << cima->value << endl;
	}
}
