define('notes/components/local-note', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: "article",
    classNames: ["note"],

    actions: {
      deleteNote: function (note) {
        this.sendAction("deleteNote", note);
      }
    }
  });

});