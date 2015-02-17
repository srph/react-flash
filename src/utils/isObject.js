/**
 * Checks if the passed argument is an object
 * @params {mixed} o Value to be checked
 */
module.exports = function(o) {
  return o !== null && typeof o === 'object';
}