/** @jsx React.DOM */
var React = require('react');

/**
 * @mixin
 * Binds a timeout, causing the message
 * to be removed (call removeHandler)
 */
var MessageTimeoutMixin = {
  componentDidMount: function() { this._start(); },

  /**
   * Starts the timer
   * @see this._removeHandler
   */
  _start: function() {
    this.$timer = setTimeout(
      this._removeHandler,
      this.props.data.duration
    );
  },

  /**
   * Resets the timer
   */ 
  _reset: function() {
    if ( this.$timer ) clearTimeout(this.$timer);
  }
};

/**
 * @mixin
 * A boilerplate for messages.
 * Used the by the message component,
 * and should be reusable for custom templates
 */
var MessageMixin = {
  // Attach self-removing mixin
  mixins: [MessageTimeoutMixin],

  propTypes: {
    data: React.PropTypes.object.isRequired,

    /**
     * There are instances when our message contains
     * only a string, and sometimes a data. So usage may either be:
     * . {this.props.data}.
     * <img> {this.props.data.username} replied to your commment..
     */
    data: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]).isRequired,

    /**
     * `Drawer`'s implementation simply calls `MessageAction`'s
     * `remove` fn, but I preferred to pass it down from `Drawer`
     * instead of directly calling the action because this component
     * (Message) | mixin is tightly coupled to the `Drawer` component
     * anyway.
     * @see Drawer
     * @see Drawer._removeHandler
     */
    removeHandler: React.PropTypes.func.isRequired,
  },

  /**
   * Executes Drawer's remove handler
   * @see Drawer
   * @see Drawer's removeHandler
   */
  _removeHandler: function() {
    this.props.remove(
      this.props.data.key
    );
  }
}

module.exports = MessageMixin;
