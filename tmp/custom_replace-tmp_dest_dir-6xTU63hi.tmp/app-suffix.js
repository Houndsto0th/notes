/* jshint ignore:start */

define('notes/config/environment', ['ember'], function(Ember) {
  var prefix = 'notes';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("notes/tests/test-helper");
} else {
  require("notes/app")["default"].create({});
}

/* jshint ignore:end */
