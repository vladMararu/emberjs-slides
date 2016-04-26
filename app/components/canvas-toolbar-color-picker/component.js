import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onColorChange(event) {
      console.log(event.target.value);
      this.set('currentColor', event.target.value);
      this.sendAction('onColorChange', this.currentColor);
    },
  },
});
