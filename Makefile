.PHONY: clean

PROJECT_URL:="https://$(shell git config --get remote.origin.url | sed 's,:,/,g' | sed 's,git@,,g')"
export PROJECT_URL

PROJECT_NUMBER:=$(shell git rev-parse HEAD | git describe --tags)
export PROJECT_NUMBER

all: compile doxygen

compile:
	@echo "Compile your code from here"

assets:
	@$(MAKE) -C assets

doxygen:
	@echo "Generating Doxygen documentation.. $(PROJECT_URL)@$(PROJECT_NUMBER)"
	@doxygen -q
	@make release

release:
	@echo "Available releases with documentation.."
	@rm -rf share/latest
	@mkdir -p share/$(PROJECT_NUMBER)
	@ln -sf $(PROJECT_NUMBER) share/latest
	@find share -type d -mindepth 1 -maxdepth 1 | cut -d '/' -f2- | sort > share/metadata.txt
	@find share/latest/ -type f -name *.html -exec sed -i '' "s,%PROJECT_URL%,$(PROJECT_URL),g" {} +
	@cat share/metadata.txt
	
clean:
	rm *.o temp
