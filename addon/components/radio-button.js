import { action } from '@ember/object'
import Component from '@glimmer/component'

export default class RadioButtonComponent extends Component {
  get isChecked () {
    return this.args.value === this.args.groupValue
  }

  @action
  inputHandler (event) {
    const { onChange, value } = this.args

    if (typeof onChange === 'function') {
      onChange(value, event)
    }
  }
}
