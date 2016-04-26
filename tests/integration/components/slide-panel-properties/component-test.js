import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slide-panel-properties', 'Integration | Component | slide panel properties', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slide-panel-properties}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slide-panel-properties}}
      template block text
    {{/slide-panel-properties}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
