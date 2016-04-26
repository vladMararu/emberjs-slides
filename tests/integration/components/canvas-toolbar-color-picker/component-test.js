import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-color-picker', 'Integration | Component | canvas toolbar color picker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-toolbar-color-picker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#canvas-toolbar-color-picker}}
      template block text
    {{/canvas-toolbar-color-picker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
