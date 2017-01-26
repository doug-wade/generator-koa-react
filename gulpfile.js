'use strict';
var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var plumber = require('gulp-plumber');

gulp.task('static', function () {
  return gulp.src('generators/app/index.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test', function (cb) {
  var mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('watch', function () {
  gulp.watch(['generators/**/*.js', 'test/**'], ['test']);
});

gulp.task('default', ['static', 'test']);
