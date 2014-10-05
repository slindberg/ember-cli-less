var LESSCompiler = require('broccoli-less-single');

function LESSPlugin(options) {
  this.name = 'ember-cli-less';
  this.ext = 'css';
  options = options || {};
  options.inputFile = options.inputFile || 'app.less';
  options.outputFile = options.outputFile || 'app.css';
  if (options.sourceMap) {
    options.sourceComments = 'map';
    options.sourceMap = options.outputFile + '.map';
  }
  this.options = options;
};

LESSPlugin.prototype.toTree = function(tree, inputPath, outputPath) {
  var trees = [tree];
  if (this.options.includePaths) trees = trees.concat(this.options.includePaths);
  inputPath += '/' + this.options.inputFile;
  outputPath += '/' + this.options.outputFile;
  return new LESSCompiler(trees, inputPath, outputPath, this.options);
};

function EmberCLILESS(project) {
  this.project = project;
  this.name = 'Ember CLI LESS';
}

EmberCLILESS.prototype.treeFor = function treeFor(type) {
};

EmberCLILESS.prototype.included = function included(app) {
  var options = app.options.lessOptions || {};
  if ((options.sourceMap === undefined) && (app.env == 'development')) {
    options.sourceMap = true;
  }
  options.outputFile = options.outputFile || this.project.name() + '.css';
  app.registry.add('css', new LESSPlugin(options));
};

module.exports = EmberCLILESS;
