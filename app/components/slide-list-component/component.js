import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onClick() {
      this.sendAction('handleRemove');
    },
  },
});
