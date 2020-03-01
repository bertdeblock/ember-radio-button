import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { click, render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | radio-button', function (hooks) {
  setupRenderingTest(hooks)

  test('it sets the "value" attribute', async function (assert) {
    await render(hbs`
      <RadioButton @value="some-value" />
    `)

    assert.dom('input').hasAttribute('value', 'some-value')
  })

  test('it updates the "checked" attribute', async function (assert) {
    this.set('groupValue', 'some-value')

    await render(hbs`
      <RadioButton @groupValue={{this.groupValue}} @value="some-value" />
    `)

    assert.dom('input').isChecked()

    this.set('groupValue', 'some-other-value')

    assert.dom('input').isNotChecked()
  })

  test('it calls @onChange with the correct arguments', async function (assert) {
    let radioButtonEvent
    let radioButtonValue

    this.changeHandler = function (value, event) {
      radioButtonEvent = event
      radioButtonValue = value
    }

    await render(hbs`
      <RadioButton @onChange={{this.changeHandler}} @value="some-value" />
    `)

    await click('input')

    assert.ok(radioButtonEvent)
    assert.equal(radioButtonValue, 'some-value')
  })
})
