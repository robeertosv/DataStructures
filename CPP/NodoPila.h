#ifndef NODOPILA_H
#define NODOPILA_H
#include <iostream>

class Nodo {
	private:
		int value;
		Nodo* next;
		friend class Pila;
	public:
		Nodo();
		Nodo(int v, Nodo* sig = NULL);
		~Nodo();
};

typedef Nodo* pnodo;

#endif
