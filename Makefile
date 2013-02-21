IGNORED_FILES=png|gif|jpg|vendor|css

update:
	git pull
	npm i

run-tests:
	yeoman test

loc:
	git ls-files | egrep -v '$(IGNORED_FILES)' | xargs wc -l

server:
	yeoman server