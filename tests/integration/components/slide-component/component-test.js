import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slide-component', 'Integration | Component | slide component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slide-component}}`);

  assert.equal(this.$().text().trim(), 'X');

  // Template block usage:
  this.render(hbs`
    {{#slide-component}}

    {{/slide-component}}
  `);

  assert.equal(this.$().text().trim(), 'X');
});
