'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var params = this.name.split(" ");
  this.modelName = fleck.singularize(params.shift());
  this.modelFields = params;
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.files = function files() {
  this.template('model.coffee','app/models/'+this._.underscored(this.modelName)+'.coffee');
};
