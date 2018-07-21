'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class KoaReactGenerator extends Generator {

  prompting() {
    const done = this.async();

    this.log(yosay(
      `Welcome to the delightful ${chalk.red('generator-koa-react')} generator!`
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'What would you like to call your app?',
      default: 'koa-react'
    }];

    this.prompt(prompts, (props) => {
      this.props = props;
      done();
    });
  }

  writing() {
    // dotfiles (replace '_' with '.')
    [
      '_babelrc',
      '_gitignore'
    ].forEach((filename) => {
      this.fs.copyTpl(
        this.templatePath(filename),
        this.destinationPath(filename.replace('_', '.')),
        this.props
      );
    });

    [
      '_package.json',
      '_gulpfile.babel.js',
      '_README.md'
    ].forEach((filename) => {
      this.fs.copyTpl(
        this.templatePath(filename),
        this.destinationPath(filename.replace('_', '')),
        this.props
      );
    });

    this.fs.copyTpl(
      this.templatePath('browser/**/*.js'),
      this.destinationPath('browser'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('test/*.js'),
      this.destinationPath('test'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('server/*.js'),
      this.destinationPath('server'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('styles/*.css'),
      this.destinationPath('styles'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('views/*.pug'),
      this.destinationPath('views'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('db.json'),
      this.destinationPath('db.json'),
      this.props
    );
  }

  install() {
    this.npmInstall();
  }
}
