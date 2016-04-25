import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectSlide() {
      console.log('test select slide');
      const id = this.get('slide').get('id');
      this.sendAction('handleSelectSlide', id);
    },
    removeSlide() {
      console.log('test remove slide');
      this.destroy();
    },
  },
});
