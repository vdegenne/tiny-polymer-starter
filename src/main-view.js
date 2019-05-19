import { PageViewElement } from './page-view-element'
import { html } from 'lit-element'

import { PageStyles } from './page-styles'

class MainView extends PageViewElement {
  render() {
    return html`
    ${PageStyles}
    <div>main view</div>
    `
  }
}

window.customElements.define('main-view', MainView)
