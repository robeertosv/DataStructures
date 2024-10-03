#ifndef NODOPILA_H
#define NODOPILA_H

#include <iostream>

class NodoPila {
	private:
		int value;
		NodoPila* next;
		friend class Pila;
	public:
		NodoPila();
		NodoPila(int v, NodoPila* sig = NULL);
		~NodoPila();
};

typedef NodoPila* pnodo;

#endif
