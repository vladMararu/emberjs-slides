import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'panel-properties',
  classNames: 'panel-properties',
  init() {
    this._super(...arguments);
  },
  actions: {
    colorChanged(color) {
    this.sendAction('colorChanged',color);
    },
  },
});
