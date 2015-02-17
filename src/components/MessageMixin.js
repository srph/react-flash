/** @jsx React.DOM */
var React = require('react');
var MessageActions = require('../MessageActions');

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
      this.props.attributes.duration
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
    attributes: React.PropTypes.object.isRequired,

    /**
     * There are instances when our message contains
     * only a string, and sometimes a data. So usage may either be:
     * . {this.props.data}.
     * <img> {this.props.data.username} replied to your commment..
     */
    data: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]).isRequired
  },

  /**
   * Executes Drawer's remove handler
   * @see Drawer
   * @see Drawer's removeHandler
   */
  _removeHandler: function() {
    MessageActions.remove(this.props.data.id);
  }
}

module.exports = MessageMixin;
