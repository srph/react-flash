/**
 * (shallow) Plucks the given property out of the object / array
 * @param {Object|Array} obj Source to pluck some properties out
 * @param {mixed} prop Property(ies) to be plucked out
 */
module.exports = function(obj, prop) {
  var keys = Object.keys(obj);
  var temp = {}; // New object for the plucked properties

  if ( !Array.isArray(prop) ) temp[prop] = obj[prop];
  // Pluck each property, and assign to
  // the new object
  else prop.forEach(function(p) { temp[p] = obj[p]; });

  return temp;
}