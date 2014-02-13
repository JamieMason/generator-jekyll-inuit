'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var JekyllInuitGenerator = module.exports = function JekyllInuitGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(JekyllInuitGenerator, yeoman.generators.Base);

JekyllInuitGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'input',
    name: 'appname',
    message: 'What name shall we give your project?',
    default: this.appname
  }, {
    type: 'input',
    name: 'description',
    message: 'How would you summarise your project?',
    default: ''
  }, {
    type: 'input',
    name: 'authorName',
    message: 'What is your name?',
    default: ''
  }, {
    type: 'input',
    name: 'usernameGithub',
    message: 'What is your GitHub username?',
    default: ''
  }, {
    type: 'input',
    name: 'usernameTwitter',
    message: 'What is your twitter handle?',
    default: ''
  }, {
    type: 'input',
    name: 'authorEmail',
    message: 'What is your Email?',
    default: ''
  }];











  this.prompt(prompts, function (props) {
    this.appname = props.appname;
    this.description = props.description;
    this.authorName = props.authorName;
    this.usernameGithub = props.usernameGithub;
    this.usernameTwitter = props.usernameTwitter;
    this.authorEmail = props.authorEmail;

    cb();
  }.bind(this));
};

JekyllInuitGenerator.prototype.app = function app() {
  // copy directories
  this.directory('_layouts', '_layouts');
  this.directory('_posts', '_posts');
  this.directory('css', 'css');

  // interpolated file contents
  this.template('_config.yml', '_config.yml');
  this.template('_package.json', 'package.json');

  // straight copies of files
  this.copy('config.rb', 'config.rb');
  this.copy('favicon.ico', 'favicon.ico');
  this.copy('gitignore', '.gitignore');
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('index.html', 'index.html');
  this.copy('jshintrc', '.jshintrc');
  this.copy('README.md', 'README.md');
};
