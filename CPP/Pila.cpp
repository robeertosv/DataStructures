#include "NodoPila.h"
#include "Pila.h"
#include <iostream>
using namespace std;

// Constructor para la pila
Pila::Pila() {
	cima = NULL;
}

// Destructor
Pila::~Pila() {
	while(cima) pop();
}

// Push item to the top
void Pila::push(int n) {
	pnodo nuevo = new Nodo(n, cima);
	cima = nuevo;
}

// Pop the last item (LIFO)
void Pila::pop() {
	pnodo nodo;

	if(cima) {
		nodo = cima;
		cima = nodo->next;
		delete nodo;
	}
}

// Check if stack is empty
bool Pila::isEmpty() {
	return cima == NULL;
}

// Length of the stack
int Pila::length() {
	Pila aux;
	int length = 0;

	while(!isEmpty()) {
		aux.push(top());
		pop();
		length++;
	}

	for(int i = 0; i<length; i++) {
		push(aux.cima->value);
		aux.pop();
	}

	return length;
}

// View the top (without popping)
int Pila::top() {
	if(!isEmpty()) {
		return cima->value;
	} else {
		return -0;
	}
}

// View the bottom
int Pila::last() {
	reverse();
	int n = cima->value;
	reverse();

	return n;	
}

// Reverse the stack
void Pila::reverse() {
	Pila aux;
	Pila aux2;

	while(!isEmpty()) {
		aux.push(cima->value);
		pop();
	}

	while(!aux.isEmpty()) {
		aux2.push(aux.cima->value);
		aux.pop();
	}

	while(!aux2.isEmpty()) {
		push(aux2.cima->value);
		aux2.pop();
	}

}

// Print the top item
void Pila::toString() {
	if(isEmpty()) {
		cout << "La pila está vacía" << endl;		
	} else {
		cout << "Cima de la pila: " << cima->value << endl; 
	}
}

// Print all items
void Pila::showAll() {
	Pila tmp;

	while(!isEmpty()) {
		cout << cima->value << ", ";
		tmp.push(cima->value);
		pop();
	}

	cout << "\n";

	while(!tmp.isEmpty()) {
		push(tmp.cima->value);
		tmp.pop();
	}
}

// Pop the last item
void Pila::popLast() {
	reverse();
	pop();
	reverse();
}

// Pop n first items
void Pila::popRange(int n) {
	for(int i = 0; i<n; i++) pop();
}

// Add sec to the stack
void Pila::concat(Pila sec) {
	sec.reverse();

	while(!sec.isEmpty()) {
		push(sec.cima->value);
		sec.cima = sec.cima->next;
	}
}

// Check is stack is ordered
bool Pila::isOrder() {
	bool order = true;
	pnodo aux = cima;

	while(aux->next != NULL && order) {
		if(aux->value > aux->next->value) {
			order = false;
		}

		aux = aux->next;
	}

	return order;
}