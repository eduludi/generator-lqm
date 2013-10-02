'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.controllerName = fleck.singularize(this.name,1);
  this.pluralControllerName = fleck.pluralize(this.name,2);
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  this.template('controller.coffee', 'app/controllers/'+this._.underscored(this.controllerName)+'.coffee');
};
