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
   * Removes the message with given key
   * @param {int} id ID/Key of message which would be removed
   */
  onRemove: function(id) {
    // Index of the message
    var index = _stack.map(function(message) { return message.id }).indexOf(id);

    // Throw an exception if there are no results of the given id
    if ( index == -1 )
      throw new Error('The message (id) does not exist in the stack');
    
    _stack.splice(index, 1);
    this.trigger(_stack);
  },

  /**
   * Adds a new message to the stack
   */
  onAdd: function(data) {
    // Message defaults
    var _defaults = {
      id: ++_counter,
      duration: 10000,
      template: ''
    };

    _stack.push( data
      ? objectAssign(_defaults, data)
      : _defaults
    );

    this.trigger(_stack);
  },

  /**
   * Removes everything in the stack
   */
  onClear: function(filter) {
    this.trigger(_stack = !!filter
      ? _stack.filter(function(m) { return m.type ? filter !== message.type : true })
      : []
    );
  }
};

module.exports = MessageStore;
