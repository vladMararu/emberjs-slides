import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('canvas-toolbar-addline', 'Unit | Component | canvas toolbar addline', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true,
});

test('should trigger external action on click', function(assert) {
  assert.expect(1);

  const targetObject = {
    externalAction: (param) => {
      // This assertion will be called when the action is triggered
      assert.equal(param, 'addLine');
    },
  };
  const comp = this.subject();
  comp.set('targetObject', targetObject);
  comp.set('addElement', 'externalAction');

  this.render();

  this.$().find('button').click();
});
