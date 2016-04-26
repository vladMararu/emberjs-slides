import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-right-align', 'Integration | Component | canvas toolbar right align', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-toolbar-right-align}}`);

  assert.equal(this.$().text().trim(), 'rightAlign');

  // Template block usage:
  this.render(hbs`
    {{#canvas-toolbar-right-align}}
      template block text
    {{/canvas-toolbar-right-align}}
  `);

  assert.equal(this.$().text().trim(), 'rightAlign');
});
