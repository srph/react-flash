/** @jsx React.DOM */
var React = require('react');
var Message = require('./Message');

/**
 * Default drawer style
 */
var DefaultStyle = {
  'position': 'absolute',
  'left': 'auto',
  'right': 'auto',
  'top': '25px'
}; 

/**
 * More like a category of messages,
 * or a container of messages of certain type
 */
var Drawer = React.createClass({
  propTypes: {
    // Type of message to be filtered, filter == message.type
    filter: React.PropTypes.string,
    // Styling attributes, attributes: { class: .., style: .. };
    attributes: React.PropTypes.object,
    // Messages
    stack: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    // Custom template instead of the provided Message
    // Template should be a `function` since `React.createClass({ .. })`
    // returns a `function`
    template: React.PropTypes.function,
    // Remove handler passed from the Container
    // down to the Messages
    removeHandler: React.PropTypes.function.isRequired,
  },
  
  getDefaultProps: function() { return { attributes: {} }; },
  
  render: function() {
    // Props shorthand
    var filter = this.props.filter;
    var stack = this.props.stack;
    var removeHandler = this.props.removeHandler;
    
    // Attributes
    var attributes = this.props.attributes;
    var style = attributes.style || DefaultStyle;
    var className = attributes.className || '';
    
    // Message template
    var Message = this.props.template || Message;
    var template = stack.map(function(message, index) {
      return <Message data={message} key={index} removeHandler={removeHandler} />
    });

    return (
      <div style={style} className={className}>
        {template.filter(function(message, index) {
          return filter ? message.type == filter : true;
        })}
      </div>
    );
  }
});

module.exports = Drawer;
