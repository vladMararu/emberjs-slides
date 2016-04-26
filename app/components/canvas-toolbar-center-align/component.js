import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onClick() {
      console.log('Center Align');
      this.sendAction('textAlign', 'center');
    },
  },
});
