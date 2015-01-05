var objectAssign = require('object-assign');

var _counter = 0;
var _stack = [];
/**
 * Registry of all messages, mixin to manage all drawers.
 * Contains add, flush, and remove to do the mentioned.
 */
var Manager = {
  /**
   * Removes the message with given key
   * @param {int} id ID/Key of message which would be removed
   */
  remove: function(id) {
    // Index of the message
    var index = _stack.map(function(message) { return message.data.id }).indexOf(id);

    // Throw an exception if there are no results of the given id
    if ( index == -1 )
      throw new Error('The message (id) does not exist in the stack');
    
    return _stack.splice(index, 1);
  },

  /**
   * Adds a new message to the stack
   */
  add: function(data) {
    // Message defaults
    var _defaults = {
      id: ++_counter,
      duration: 10000,
      data: { string: '' }
    };

    _stack.push(data
      ? objectAssign(_defaults, data)
      : _defaults
    );
  },
  
  /**
   * A getter for the _stack (which is the list of messages)
   * @param {string} filter String to be compared to the message's `type property
   * @returns {Array} Filtered stack
   */
  get: function(filter) {
    return filter
      ? _stack.filter(function(message) { return filter == message.type })
      : _stack;
  },

  /**
   * Removes everything in the stack
   */
  flush: function() { _stack = []; }
};

module.exports = Manager;
