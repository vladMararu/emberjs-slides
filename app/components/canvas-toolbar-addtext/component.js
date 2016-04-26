import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onClick() {
      console.log('hello from add text');
      this.sendAction('addElement', 'addText');
    },
  },
});
