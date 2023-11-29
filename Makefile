PROJECT_URL:="https://$(shell git config --get remote.origin.url | sed 's,:,/,g' | sed 's,git@,,g')"
export PROJECT_URL
PROJECT_NUMBER:=$(shell git rev-parse HEAD | git describe --tags)
export PROJECT_NUMBER

.PHONY: clean

all: compile doxygen
	
clean:
	rm *.o temp

compile:
	@echo "COMPILE"

assets:
	@$(MAKE) -C assets

doxygen:
	@rm -rf share/latest
	@mkdir -p share/$(PROJECT_NUMBER)
	@ln -sf $(PROJECT_NUMBER) share/latest
	@doxygen
	@find share -type d -mindepth 1 -maxdepth 1 | cut -d '/' -f2- > share/metadata.txt
	@find share/latest/ -type f -name *.html -exec sed -i '' "s,%PROJECT_URL%,$(PROJECT_URL),g" {} +
	
