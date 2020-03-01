import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { click, render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | radio-button-group', function (hooks) {
  setupRenderingTest(hooks)

  test('it passes along the @onChange and @value arguments', async function (assert) {
    this.set('groupValue', '')

    await render(hbs`
      <RadioButtonGroup
        @onChange={{fn (mut this.groupValue)}}
        @value={{this.groupValue}}
        as |group|
      >
        <group.RadioButton @value="some-value" />
      </RadioButtonGroup>
    `)

    assert.dom('input').isNotChecked()

    await click('input')

    assert.dom('input').isChecked()
    assert.equal(this.groupValue, 'some-value')
  })
})
