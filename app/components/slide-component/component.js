import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectSlide(id) {
      this.sendAction('handleSelectSlide', id);
    },
    removeSlide() {
      this.destroy();
    },
  },
});
