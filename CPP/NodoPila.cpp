#include "NodoPila.h"

NodoPila::NodoPila() {
	value = 0;
	next = NULL;
}

NodoPila::NodoPila(int v, NodoPila* sig) {
	value = v;
	next = sig;
}

NodoPila::~NodoPila() {}
