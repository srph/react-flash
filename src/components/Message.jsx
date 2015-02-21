/** @jsx React.DOM */
"use strict";
var React = require('react');

var MessageMixin = requrie('../MessageMixin');

/**
 * Bootstrap Alert
 */
var Message = React.createClass({
  mixins: [MessageMixin],

  render: function() {
    var {data, ...other} = this.props;

    return (
      <div className="alert" role="alert">
        <button type="button" className="close" aria-label="close">
          <span aria-hidden="true">&times;</span>
        </button>
        <p>{data}</p>
      </div>
    );
  }
});