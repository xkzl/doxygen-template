#include <stdlib.h>
#include "display.h"

int main(int argc, char *argv[]) {
	int e = EXIT_SUCCESS;
    if (displayMessage(HELLO_WORLD) != EXIT_SUCCESS) {
    	e = EXIT_FAILURE;
    }
	return e;		
}
