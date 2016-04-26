import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onClick() {
      console.log('Left Align');
      this.sendAction('textAlign', 'left');
    },
  },
});
