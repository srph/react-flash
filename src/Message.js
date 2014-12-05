/** @jsx React.DOM */
var React = require('react');
var MessageMixin = require('./MessageMixin');

var Message = React.createClass({
  mixins: [MessageMixin],
  render: function() {
    var message = this.props.message;

    return (
      <div key={message.id}>
        {message.data.string} |
        <span onClick={this.removeHandler}>X</span>
      </div>
    );
  }
});

module.exports = Message;