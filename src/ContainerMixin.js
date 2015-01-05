var objectAssign = require('object-assign');

var _index = 0;

/**
 * @mixin
 * Registry of all messages, mixin to manage all drawers.
 * Contains add, flush, and remove to do the mentioned.
 */
var ContainerMixin = {
  getInitialState: function() { 
    return { stack: [] };
  },

  /**
   * Removes the message with given key
   */
  remove: function(id) {
    var stack = this.state.stack;
    
    // Index of the message
    var index = stack
      .map(function(message) {
        return message.id
      })
      .indexOf(id);

    // Throw an exception if the id
    // does not exist
    if ( index == -1 )
      throw new Error('The message (id) does not exist in the stack');
    
    stack.splice(index, 1);
    this.setState({ stack: stack });
  },

  /**
   * Adds a new message to the stack
   */
  add: function(data) {
    var stack = this.state.stack;

    // Message defaults
    var _defaults = {
      id: ++_index,
      duration: 10000,
      data: { string: '' }
    };

    stack.push( data
      ? objectAssign(_defaults, data)
      : _defaults
    );

    this.setState({ stack: stack });
  },

  /**
   * Removes everything in the stack
   */
  flush: function() {
    this.setState({ stack: [] });
  }
};

module.exports = ContainerMixin;
