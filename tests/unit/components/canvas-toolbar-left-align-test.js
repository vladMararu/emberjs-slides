import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('canvas-toolbar-left-align', 'Unit | Component | canvas toolbar left align', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true,
});

test('should trigger external action on click', function(assert) {
  assert.expect(1);

  const targetObject = {
    externalAction: (param) => {
      // This assertion will be called when the action is triggered
      assert.equal(param, 'left');
    },
  };
  const comp = this.subject();
  comp.set('targetObject', targetObject);
  comp.set('textAlign', 'externalAction');

  this.render();

  this.$().find('button').click();
});
