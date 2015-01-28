import Ember from "ember";

export default Ember.ArrayController.extend({

  isAddingNewNote: false,

  noteHasContent: function () {
    return this.get('noteCopy') && this.get('noteCopy').trim();
  }.property('noteCopy'),

  actions: {
    newNote: function() {
      var body = this.get('noteCopy');

      if (body) {
      var note = this.store.createRecord('note', { body: body });
      this.set('noteCopy', '');
      note.save();
      this.set('isAddingNewNote', false);
      }
    },
    deleteNote: function (id) {
    var note = this.store.find('note', id).then(function(note) {
      note.deleteRecord();
      note.save().then(function(){
        this.flashMessage('success', 'You just deleted your note!!');
      }.bind(this));
    }.bind(this));
  }
  }
});
