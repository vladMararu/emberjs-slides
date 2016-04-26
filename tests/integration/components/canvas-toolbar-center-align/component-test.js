import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-center-align', 'Integration | Component | canvas toolbar center align', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-toolbar-center-align}}`);

  assert.equal(this.$().text().trim(), 'centerAlign');

  // Template block usage:
  this.render(hbs`
    {{#canvas-toolbar-center-align}}
      template block text
    {{/canvas-toolbar-center-align}}
  `);

  assert.equal(this.$().text().trim(), 'centerAlign');
});
