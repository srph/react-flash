var ReactTools = require('../node_modules/react-tools');

module.exports = {
  process: function(src) {
    return ReactTools.transform(src, { harmony: true });
  }
};