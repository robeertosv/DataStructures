#ifndef PILA_H
#define PILA_H
#include "NodoPila.h"

class Pila {
	private:
		pnodo cima;
	public:
		Pila();
		~Pila();
		void push(int n);
		void pop();
		bool isEmpty();
		void viewCima();
};

#endif
