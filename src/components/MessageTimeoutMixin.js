/**
 * @mixin
 * Binds a timeout, causing the message
 * to be removed (call removeHandler)
 */
var MessageTimeoutMixin = {
  /**
   * `Conditionally` starts the timer
   * @see this._start
   */
  componentDidMount: function() {
    var duration = this.props.attributes.duration;

    // This is a feature:
    // Only start the auto timer if the duration was provided or if the
    // supplied duration was not null. This allows conditional timers
    // for messages applying this mixin ;)
    if ( duration == null || duration == undefined ) this._start();
  },

  /**
   * Clears the timer
   * @see this._stop
   */
  componentWillUnmount: function() { this._stop(); },

  /**
   * Starts the timer
   * @see this._removeHandler
   */
  _start: function() {
    var duration = this.props.attributes.duration;
    this.$timer = setTimeout(this._removeHandler, duration);
  },

  /**
   * Clears the timer
   */ 
  _stop: function() {
    if ( this.$timer ) clearTimeout(this.$timer);
  }
};

module.exports = MessageTimeoutMixin;