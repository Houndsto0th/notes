define('notes/adapters/application', ['exports', 'ember-data', '../config/environment'], function (exports, DS, ENV) {

  'use strict';

  exports['default'] = DS['default'].ActiveModelAdapter.extend({
    host: ENV['default'].adapterURL
  });

});