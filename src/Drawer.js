/** @jsx React.DOM */
var React = require('react');

var Manager = require('./Manager');
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
    // Custom template instead of the provided Message
    // Template should be a `function` since `React.createClass({ .. })`
    // returns a `function`
    template: React.PropTypes.function
  },
  
  getDefaultProps: function() { return { attributes: {} }; },
  getInitialState: function() { return { stack: [] } },
  componentDidMount: function() { this.__updateStack() },
  
  render: function() {
    // Props shorthand
    var stack = this.state.stack;
    var removeHandler = this._removeHandler;
    
    // Attributes
    var attributes = this.props.attributes;
    var style = attributes.style || DefaultStyle;
    var className = attributes.className || '';
    
    // Message template
    var Message = this.props.template || Message;

    return (
      <div style={style} className={className}>
        {stack.map(function(message, index) {
          return <Message data={message} key={index} removeHandler={removeHandler} />
        })}
      </div>
    );
  },
  
  /**
   * @see Manager.remove
   * @param {int} id ID to pass to Manager.remove / Message to remove
   */
  _removeHandler: function(id) {
    Manager.remove(id);
    this.__updateStack();
  },
  
  /**
   * @see Manager.flush
   */
  _flushHandler: function() { Manager.flush(); }
  
  /**
   * A `private` method
   * Updates the `state` stack
   * by fetching from the Manager's
   * @see Manager.get 
   */
  __updateStack: function() {
    var filter = this.props.filter;
    var stack = Manager.get(filter);
    
    this.setState({ stack: stack });    
  }
});

module.exports = Drawer;
