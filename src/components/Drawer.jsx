/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');

var MessageActions = require('../MessageActions');
var MessageStore = require('../MessageStore');
var Message = require('./components/Message.jsx');

var pluck = require('../utils/pluck');

/**
 * More like a category of messages,
 * or a container of messages of certain type
 */
var Drawer = React.createClass({
  /**
   * @see Reflux.connectFilter
   */
  mixins: [Reflux.connectFilter(MessageStore, 'stack', function(stack) {
    var filter = this.props.filter;
    
    return stack.filter(function(message, index) {
      return filter ? message.type == filter : true;
    });
  })],

  propTypes: {
    /**
     * Type of message to be filtered, filter == message.type
     */
    filter: React.PropTypes.string,
    
    /**
     * Limit of messages to show
     */
    limit: React.PropTypes.number
  },
  
  render: function() {
    // Props shorthand
    var {filter, limit, ...other} = this.props;
    var stack = this.state.stack;
    
    // Message template
    var Message = this.props.children || Message;

    return (
      <div {...other}>
        {stack.map(function(message, index) {
          return React.addons.cloneWithProps(Message, {
            attributes: pluck(obj, ['id', 'duration', 'type']),
            data: message.data,
            key: message.id
          });
        })}
      </div>
    );
  }
});

module.exports = Drawer;