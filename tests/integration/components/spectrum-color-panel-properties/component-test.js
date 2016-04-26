import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spectrum-color-panel-properties', 'Integration | Component | spectrum color panel properties', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{spectrum-color-panel-properties}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#spectrum-color-panel-properties}}
      template block text
    {{/spectrum-color-panel-properties}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
