import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('toolbar-shop', 'Integration | Component | toolbar shop', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{toolbar-shop}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#toolbar-shop}}
      template block text
    {{/toolbar-shop}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
