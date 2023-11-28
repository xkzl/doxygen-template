.PHONY: clean

all: compile doxygen
	
clean:
	rm *.o temp

compile:
	@echo "COMPILE"

doxygen:
	@doxygen
