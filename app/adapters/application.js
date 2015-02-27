import DS from "ember-data";

export default DS.ActiveModelAdapter.extend({
  host: 'https://notes-backend.herokuapp.com/'
});
