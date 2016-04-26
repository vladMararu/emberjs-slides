import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addElement(param) {
      console.log(param);
    },
    textAlign(param) {
      console.log(param);
    },
    onColorChange(param) {
      console.log(param);
    },
  },
});
