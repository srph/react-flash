var React = require('react');
var MessageActions = require('../MessageActions');

/**
 * @mixin
 * A boilerplate for messages. Used the by the message component,
 * and should be reusable for custom templates
 */
var MessageMixin = {
  propTypes: {
    /**
     * Message attributes (id, type, duration). Propeties
     * important other than data.
     */
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
    MessageActions.remove(this.props.attributes.id);
  }
};

module.exports = MessageMixin;
