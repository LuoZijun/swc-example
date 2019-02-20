
default: all

build/*.js: src/*.js
	mkdir -p build
	echo "> ecmascript transforming ..."
	# swc src/prelude.js -d build
	cp src/prelude.js build/prelude.js
	swc src/index.js -d build
	swc src/foo.js -d build
	swc src/bar.js -d build

dist/*.js: build/*.js
	mkdir -p dist
	echo "> ecmascript packaging ..."
	px --es-syntax-everywhere build/index.js dist/bundle0.js
	cat build/prelude.js > dist/bundle.js
	cat dist/bundle0.js >> dist/bundle.js

build: build/*.js
dist: dist/*.js

run: build/index.js dist/bundle.js
	node build/index.js
	node dist/bundle.js

all: build dist

clear:
	rm -rf build
	rm -rf dist
