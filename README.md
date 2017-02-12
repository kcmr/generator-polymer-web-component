# generator-polymer-web-component [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
A Yeoman generator for Web Components using Polymer with an integrated build process through Gulp (CSS autoprefixer, eslint, live reload with browserSync and code minification).

The generator and gulpfile are **highly inspired** by [Generator Polymer Element](https://github.com/seaneking/generator-polymer-element).

## Installation

First, install [Yeoman](http://yeoman.io) and `generator-polymer-web-component` using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
$ npm install -g yo
$ npm install -g generator-polymer-web-component
```

Then generate your new component:

```bash
$ yo polymer-web-component
```

By default, the component's name will be the folder where you execute the command. If you specify a name for your component, the generator will create a folder with that name for your component if the current folder doesn't match that name.

## Build and serve

Run `gulp` inside your component to build the minified version and serve the component's demo.

Note: the source files are located inside the `src` folder.

```bash
$ cd <component-path> && gulp
```

### Options

Use the flag `--no-minify` to build the dist without minify.

```bash
$ gulp --no-minify
```

### Testing

You can choose TDD or BDD style for unit tests. Navigate to `http://localhost:<port>/test/` to run your tests.

_The port may change depending on the ports in use._

## Code coverage through Web Component Tester

You need [web-component-tester](https://github.com/Polymer/web-component-tester) installed globally:

```bash
$ npm install -g web-component-tester
```

Then, you can run your tests on the specified local browsers (Chrome by default) in `wct.conf.js`:

```bash
$ cd <component-path> && wct
```

Code coverage is done with [Istanbul](https://github.com/gotwarlost/istanbul). By default, the coverage thresholds for statements, branches, functions and lines are set to 70%. You can change this thresholds in `wct.conf.js`.

## License

MIT © [Kus Cámara](https://github.com/kcmr/)


[npm-image]: https://badge.fury.io/js/generator-polymer-web-component.svg
[npm-url]: https://npmjs.org/package/generator-polymer-web-component
[travis-image]: https://travis-ci.org/kcmr/generator-polymer-web-component.svg?branch=master
[travis-url]: https://travis-ci.org/kcmr/generator-polymer-web-component
[daviddm-image]: https://david-dm.org/kcmr/generator-polymer-web-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kcmr/generator-polymer-web-component
