import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onClick() {
      console.log('right Align');
      this.sendAction('textAlign', 'right');
    },
  },
});
