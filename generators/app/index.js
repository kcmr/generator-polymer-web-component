'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var mkdirp = require('mkdirp');
var _ = require('lodash-addons');

module.exports = yeoman.Base.extend({
  prompting: function() {
    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'name',
      required: true,
      message: 'Component\'s name',
      default: _.slugify(this.appname),
      validate: function(str) { return /^([a-z])(?!.*[<>])(?=.*-).+$/.test(str); }
    }, {
      type: 'input',
      name: 'description',
      message: 'Short description',
      default: 'An element providing a solution to no problem in particular.'
    }];

    return this.prompt(prompts).then(function(props) {
      this.props = props;
      done();
    }.bind(this));
  },

  default: function() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(chalk.yellow('Creating a folder named ' + this.props.name + ' for you.'));
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }
  },

  writing: {
    src: function() {
      this.fs.copyTpl(this.templatePath('src/component.html'), this.destinationPath('src/' + this.props.name + '.html'), this);
      this.fs.copyTpl(this.templatePath('src/component.js'), this.destinationPath('src/' + this.props.name + '.js'), this);
      this.fs.copyTpl(this.templatePath('src/component.css'), this.destinationPath('src/' + this.props.name + '.css'), this);
      this.fs.copyTpl(this.templatePath('src/component-styles.html'), this.destinationPath('src/' + this.props.name + '-styles.html'), this);
    },
    test: function() {
      this.fs.copyTpl(this.templatePath('test/component-test.html'), this.destinationPath('test/' + this.props.name + '-test.html'), this);
      this.fs.copyTpl(this.templatePath('test/index.html'), this.destinationPath('test/index.html'), this);
    },
    demo: function() {
      this.fs.copyTpl(this.templatePath('demo/index.html'), this.destinationPath('demo/index.html'), this);
    },
    component: function() {
      this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('index.html'), this);
      this.fs.copyTpl(this.templatePath('bower.json'), this.destinationPath('bower.json'), this);
      this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), this);

      this.fs.copy([
        this.templatePath() + '/**/.*',
        this.templatePath('gulpfile.js'),
        this.templatePath('package.json'),
        this.templatePath('wct.conf.js')
      ], this.destinationPath());
    }
  },

  install: function() {
    // TODO: remove npm: false
    this.installDependencies({
      npm: false
    });
  }
});
