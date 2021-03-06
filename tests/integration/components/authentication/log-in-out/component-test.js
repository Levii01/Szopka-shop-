import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('authentication/log-in-out', 'Integration | Component | authentication/log in out', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{authentication/log-in-out}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#authentication/log-in-out}}
      template block text
    {{/authentication/log-in-out}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
