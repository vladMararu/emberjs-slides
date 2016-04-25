import Ember from 'ember';

const bringLayouts = [
  {
    shapes: [],
    url: 'assets/layouts/blank.png',
  },
  {
    shapes: [
        { type: 'text',
          content: 'Click to add Title',
          x: '30%',
          y: '50%',
          w: '200px',
          h: '50px',
        },
    ],
    url: 'assets/layouts/title.png',
  },
  {
    shapes: [
        { type: 'text',
          content: 'Click to add Title',
          x: '30%',
          y: '10%',
          w: '100px',
          h: '30px',
        },
        { type: 'text',
          content: 'Click to add Text',
          x: '20%',
          y: '43%',
          w: '100px',
          h: '80px',
        },
        { type: 'text',
          content: 'Click to add Text',
          x: '20%',
          y: '76%',
          w: '100px',
          h: '80px',
        },
        { type: 'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '66%',
          y: '66%',
          w: '200px',
          h: '200px',
        },
    ],
    url: 'assets/layouts/title-2content-image.png',
  },
];


export default Ember.Component.extend({
  tagName: 'layouts-panel',
  layouts: [],
  init() {
    this._super(...arguments);
    this.layouts = bringLayouts;
  },
  actions: {
    layoutClick(layoutShapes) {
      this.sendAction('layoutClick',layoutShapes);
    },
  }
});
