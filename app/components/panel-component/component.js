import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel-component'],
  actions: {
    onClickSlide(id) {
      console.log(id);
    },
  },
});
