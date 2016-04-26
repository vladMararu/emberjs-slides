import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        shapes: [],
        propreties: [],
      },
      {
        id: 2,
        shapes: [],
        propreties: [],
      },
      {
        id: 3,
        shapes: [],
        propreties: [],
      },
    ];
  },
});
