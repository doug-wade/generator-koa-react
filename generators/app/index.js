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
    var that = this;
    // dotfiles (replace '_' with '.')
    [
      '_babelrc',
      '_eslintignore',
      '_eslintrc',
      '_gitignore',
      '_travis.yml'
    ].forEach(function (filename) {
      that.fs.copyTpl(
        that.templatePath(filename),
        that.destinationPath(filename.replace('_', '.')),
        that.props
      );
    });

    // other files I'm superstituous about (I'm worred they might interact with
    // tools that I use) -- remove leading underscore
    [
      '_package.json',
      '_gulpfile.babel.js',
      '_README.md'
    ].forEach(function (filename) {
      that.fs.copyTpl(
        that.templatePath(filename),
        that.destinationPath(filename.replace('_', '')),
        that.props
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
      this.templatePath('views/*.html'),
      this.destinationPath('views'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('db.json'),
      this.destinationPath('db.json'),
      this.props
    );
  },

  install: function () {
    this.installDependencies();
  }
});
