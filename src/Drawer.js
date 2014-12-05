/** @jsx React.DOM */
var React = require('react');
var Message = require('./Message');

/**
 * Default drawer style
 */
var DrawerStyle = {
  'position': 'absolute',
  'right': '25',
  'top': '25'
}; 

/**
 * More like a category of messages,
 * or a container of certain messages
 */
var Drawer = React.createClass({
  propTypes: {
    stack: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    filter: React.PropTypes.string
  },
  getDefaultProps: function() {
    return { stack: [] };
  },
  render: function() {
    var stack = this.props.stack;
    var remove = this.props.remove;

    return (
      <div style={DrawerStyle}>
        {stack.map(function(message, index) {
          return (
            <Message message={message} key={message.id} remove={remove} />
          );
        })}
      </div>
    );
  }
});

module.exports = Drawer;