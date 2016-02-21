require('../css/saas/main.scss');
var welcome = require('./welcome');
welcome('welcome Oleg!');

require('./clickme');

var compiled = require('hello.html');
window.aha = compiled({name: "world"});