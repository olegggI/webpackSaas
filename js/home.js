require('../css/saas/main.scss');
var welcome = require('./welcome');
welcome('welcome Oleg!');

require('./clickme');

var compiled = require('../html/hello.html');
window.aha = compiled({name: "world"});