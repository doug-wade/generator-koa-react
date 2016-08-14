'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-koa-react:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.babelrc',
      '.gitignore',
      'gulpfile.babel.js',
      'package.json',
      'README.md',
      'db.json'
    ]);
  });
});
