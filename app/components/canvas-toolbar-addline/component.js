import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onClick() {
      console.log('hello from add line');
      this.sendAction('addElement', 'addLine');
    },
  },
});
