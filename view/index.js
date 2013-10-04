'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.viewName = fleck.singularize(this.name);
  this.pluralViewName = fleck.pluralize(this.name);
  this.viewPath ='app/views/'+this._.underscored(this.viewName)+'.coffee';
  this.templatePath = 'app/templates/'+this._.underscored(this.viewName)+'.mustache';
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
  this.template('view.coffee', this.viewPath);
  this.template('view.mustache',this.templatePath);
};
