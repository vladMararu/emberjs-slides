import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onClick() {
      console.log('hello from add img');
      this.sendAction('addElement', 'addText');
    },
  },
});
