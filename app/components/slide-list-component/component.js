import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onClickSlideList(id) {
      this.sendAction('handleSelectPanel', id);
    },
  },
});
