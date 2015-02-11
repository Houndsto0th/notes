define('notes/models/note', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    body: DS['default'].attr("string"),
    title: DS['default'].attr("string")
  });

});