var Reflux = require('reflux');
var actions = ['add', 'remove', 'clear', 'clearExcept'];

module.exports = Reflux.createActions(actions);