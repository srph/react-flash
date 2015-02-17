var Reflux = require('reflux');
var objectAssign = require('object-assign');

var MessageActions = require('./MessageActions');

var _stack = []; // Container for the each object of message
var _counter = 0;
/**
 * Registry of all messages, mixin to manage all drawers.
 * Contains add, flush, and remove to do the mentioned.
 */
var MessageStore = Reflux.createStore({
  listenables: MessageActions,

  /**
   * Adds a new message to the stack
   */
  onAdd: function(data) {
    // Message defaults
    var _defaults = {
      id: ++_counter,
      duration: 10000,
      data: ''
    };

    _stack.push( data
      ? objectAssign(_defaults, data)
      : _defaults
    );

    this.trigger(_stack);
  },
  
  /**
   * Removes the message with given key
   * @param {int} id ID/Key of message which would be removed
   */
  onRemove: function(id) {
    // Index of the message
    var index = _stack.map(function(message) { return message.id }).indexOf(id);

    // Throw an exception if there are no results of the given id
    if ( index == -1 ) {
      var err = 'The message (id) does not exist in the stack';
      throw new Error(err);
    }
    
    _stack.splice(index, 1);
    this.trigger(_stack);
  },

  /**
   * Removes everything in the stack
   * @param {string} f Message type to be cleared
   */
  onClear: function(f) {
    this.trigger(_stack = !!f
      ? _stack.filter(function(m) { return m.type ? f !== m.type : true })
      : []
    );
  }
};

module.exports = MessageStore;
