import Ember from "ember";

export default Ember.ArrayController.extend({

  isAddingNewNote: false,

  noteHasContent: (function () {
    return this.get("noteCopy") && this.get("noteCopy").trim();
  }).property("noteCopy"),

  actions: {
    newNote: function () {
      var body = this.get("noteCopy");
      var title = this.get("noteTitle");
      if (body) {
        var note = this.store.createRecord("note", { body: body, title: title });
        this.set("noteCopy", "");
        note.save();
        this.set("isAddingNewNote", false);
      }
    },
    deleteNote: function (note) {
      note.destroyRecord();
    }
  }
});