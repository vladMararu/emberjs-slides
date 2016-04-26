import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-addtext', 'Integration | Component | canvas toolbar addtext', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-toolbar-addtext}}`);

  assert.equal(this.$().text().trim(), 'add text');

  // Template block usage:
  this.render(hbs`
    {{#canvas-toolbar-addtext}}
      template block text
    {{/canvas-toolbar-addtext}}
  `);

  assert.equal(this.$().text().trim(), 'add text');
});
