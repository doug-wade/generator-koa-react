# generator-koa-react [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A yeoman generator for using react backed by koa

Check out the generated boilerplate at https://github.com/doug-wade/example-koa-react.


## Installation

First, install [Yeoman](http://yeoman.io) and generator-koa-react using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-koa-react
```

Then generate your new project:

```bash
yo koa-react
```


## Getting Started

To start the server, just run `npm start` and navigate to
[localhost:3000](http://localhost:3000) in your favorite browser.

To install the build toolchain

    npm install -g gulp bunyan babel


## Directory structure

    browser <- the javascript source files for the browser
    build <- transpiled server-side javascript
    public <- files that are served by koa (compiled js, preprocessed css, compressed html)
    server <- the javascript source files for the server
    styles <- the styles, preprocessed
    test <- tests and fixtures
    view <- the html

Because we serve using browserify, the node api is available in the browser the
same as on the server, so the distinction between browser and server is a little
hazy, and you can free require between them and reasonably expect it to work.


## Running the tests

To run the tests, run `npm test`, or `gulp build && gulp test`, or `ava test/*.js`.

When debugging the tests, note that the tranpiler doesn't output debugger statements,
so you'll need to place them in the transpiled js in `build/`, or place them in the
browser.


## More in depth

To develop against the stack, you may also want to familiarize yourself with some
of the tools here.  Here are some relevant links
  - [babel](https://babeljs.io/)
  - [browserify](http://browserify.org/)
  - [es6](http://exploringjs.com/es6/)
  - [gulp](https://gulpjs.com)
  - [koa](koajs.com)
  - [react](https://facebook.github.io/react/)
  - [redux](https://redux.js.org)


## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).


## License

MIT © [Doug Wade](dougwade.io)


[npm-image]: https://badge.fury.io/js/generator-koa-react.svg
[npm-url]: https://npmjs.org/package/generator-koa-react
[travis-image]: https://travis-ci.org/doug-wade/generator-koa-react.svg?branch=master
[travis-url]: https://travis-ci.org/doug-wade/generator-koa-react
[daviddm-image]: https://david-dm.org/doug-wade/generator-koa-react.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/doug-wade/generator-koa-react
[coveralls-image]: https://coveralls.io/repos/doug-wade/generator-koa-react/badge.svg
[coveralls-url]: https://coveralls.io/r/doug-wade/generator-koa-react
