#include "NodoPila.h"

Nodo::Nodo() {
	value = 0;
	next = NULL;
}

Nodo::Nodo(int v, Nodo* sig) {
	value = v;
	next = sig;
}

Nodo::~Nodo() {}
