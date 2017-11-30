var lookup = require('./lookup');
module.exports = function(srm) {
  if (srm <= 0) return '#FFFFFF';
  if (srm >= 40) return '#000000';
  var rgb = lookup[Math.floor(srm * 10)];
  return '#' + rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16);
};
