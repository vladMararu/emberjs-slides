import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-addline', 'Integration | Component | canvas toolbar addline', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-toolbar-addline}}`);

  assert.equal(this.$().text().trim(), 'add line');

  // Template block usage:
  this.render(hbs`
    {{#canvas-toolbar-addline}}
      template block text
    {{/canvas-toolbar-addline}}
  `);

  assert.equal(this.$().text().trim(), 'add line');
});
