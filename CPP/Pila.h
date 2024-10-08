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
		int top();
		int length();
		bool isEmpty();
		void reverse();
		void toString();
		void showAll();
		int last();
		void popLast();
		void popRange(int n);
		void concat(Pila sec);
		bool isOrder();
};

#endif
