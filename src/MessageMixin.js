var React = require('react');
var MessageTimeoutMixin = require('./MessageTimeoutMixin');

/**
 * @mixin
 * A boilerplate for messages.
 * Used the by the message component,
 * and should be reusable for custom templates
 */
var MessageMixin = {
  mixins: [MessageTimeoutMixin],
  propTypes: {
    message: React.PropTypes.object.isRequired
  },
  getDefaultProps: function() {
    return { message: {} }
  },
  removeHandler: function() {
    this.props.remove(
      this.props.message.key
    )
  }
}

module.exports = MessageMixin;