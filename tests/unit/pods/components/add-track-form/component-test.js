import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('add-track-form', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(3);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  component.set('title', 'test title');
  component.set('artist', 'lowercase name');
  component.validate();
  assert.equal(component.get('artistStartsWithUpperCase'), false);

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
