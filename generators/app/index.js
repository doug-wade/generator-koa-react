'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the delightful ' + chalk.red('generator-koa-react') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What would you like to call your app?',
      default: 'koa-react'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('browser/actions/index.js'),
      this.destinationPath('browser/actions/index.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('browser/components/App.js'),
      this.destinationPath('browser/components/App.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('browser/components/HelloWorld.js'),
      this.destinationPath('browser/components/HelloWorld.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('browser/reducers/index.js'),
      this.destinationPath('browser/reducers/index.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('browser/app.js'),
      this.destinationPath('browser/app.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('server/app.babel.js'),
      this.destinationPath('server/app.babel.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('server/logger.babel.js'),
      this.destinationPath('server/logger.babel.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('styles/app.css'),
      this.destinationPath('styles/app.css'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('views/index.html'),
      this.destinationPath('views/index.html'),
      this.props
    );
  },

  install: function () {
    this.installDependencies();
  }
});
