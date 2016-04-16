var cp = require('child_process');
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-koa-react:app', function () {
  var tmpDir;
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inTmpDir(function (dir) {
        tmpDir = dir;
      })
      .withPrompts({name: 'koa-react'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'browser/actions/index.js',
      'browser/components/App.js',
      'browser/components/HelloWorld.js',
      'browser/reducers/index.js',
      'server/app.babel.js',
      'server/logger.babel.js',
      'styles/app.css',
      'views/index.html'
    ]);
  });

  it('passes its tests', function () {
    cp.execSync(path.join(tmpDir, 'node_modules', 'ava.js') + 'tests/*.js');
  });
});
