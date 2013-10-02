'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var LqmGenerator = module.exports = function LqmGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(LqmGenerator, yeoman.generators.Base);

LqmGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'applicationName',
    message: 'What do you want to call your app?'
  }];

  this.prompt(prompts, function (props) {
    this.applicationName = props.applicationName;

    cb();
  }.bind(this));
};

LqmGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');
  this.mkdir('app/models');
  this.mkdir('app/controllers');
  this.mkdir('app/views');
  
  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('index.html', 'app/index.html');

  this.template('_bower.json', 'bower.json');
  this.template('_config.json', 'config.json');
  this.template('_package.json', 'package.json');
};

LqmGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

LqmGenerator.prototype.runtime = function projectfiles() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
};

