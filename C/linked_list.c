#include <stdio.h>
#include <stdlib.h>

typedef struct node {
	int value;
	struct node* next;
} linked_list;

void push(linked_list* list, int n);
void read(linked_list* list);

int main() {
	linked_list* list;
	list = (linked_list*) malloc(sizeof(linked_list));

	for(int i = 0; i<=10; i++) {
		push(list, i);
	}

	read(list);

	free(list);
	return 0;
}

void push(linked_list* list, int n) {
	linked_list* current = list;

	while(current->next != NULL) {
		current = current->next;
	}

	current->next = (linked_list*) malloc(sizeof(linked_list));
	current->next->value = n;
	current->next->next = NULL;
}

void read(linked_list* list) {
	linked_list* current = list;

	while(current != NULL) {
		printf("%d ", current->value);
		current = current->next;
	}
}
