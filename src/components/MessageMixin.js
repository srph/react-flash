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
    if ( this.$timer ) clearInterval(this.$timer);
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
     * only a string. So usage may either be:
     * {this.props.template} | {this.props.template._whateverProperty_}
     */
    template: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]),

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