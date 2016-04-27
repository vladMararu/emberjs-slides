import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('slide-panel-properties', 'Unit | Component | slide panel properties', {
  // Specify the other units that are required for this test
  unit: true,
   needs: ['component:spectrum-color-panel-properties','template:components/spectrum-color-panel-properties'],
});

test('it renders', function(assert) {
  // Creates the component instance

  // Renders the component to the page
  this.render();
  assert.equal(this.$('p').text().trim(), 'Background');
});
