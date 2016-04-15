# <%= name %>
> A web application using koa, redux, and react


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
