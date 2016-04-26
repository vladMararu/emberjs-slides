import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-addimg', 'Integration | Component | canvas toolbar addimg', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-toolbar-addimg}}`);

  assert.equal(this.$().text().trim(), 'add img');

  // Template block usage:
  this.render(hbs`
    {{#canvas-toolbar-addimg}}
      template block text
    {{/canvas-toolbar-addimg}}
  `);

  assert.equal(this.$().text().trim(), 'add img');
});
