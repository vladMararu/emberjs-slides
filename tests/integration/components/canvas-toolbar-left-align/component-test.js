import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-left-align', 'Integration | Component | canvas toolbar left align', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-toolbar-left-align}}`);

  assert.equal(this.$().text().trim(), 'leftAlign');

  // Template block usage:
  this.render(hbs`
    {{#canvas-toolbar-left-align}}
      template block text
    {{/canvas-toolbar-left-align}}
  `);

  assert.equal(this.$().text().trim(), 'leftAlign');
});
