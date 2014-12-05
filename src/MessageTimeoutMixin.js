/**
 * @mixin
 * Binds a timeout, causing the message
 * to be removed (call removeHandler)
 */
var MessageTimeoutMixin = {
  componentDidMount: function() {
    this.start();
  },
  start: function() {
    this.timer = setTimeout(
      this.removeHandler,
      this.props.message.duration
    );
  },
  reset: function() {
    if ( this.timer ) {
      clearInterval(this.timer);
    }
  }
};

module.exports = MessageTimeoutMixin;