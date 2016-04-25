import Model from 'ember-data/model';

export default Model.extend({
  actions: {
    model() {
      return [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ];
    },
  },
});
