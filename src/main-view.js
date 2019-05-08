import { PageViewElement } from './page-view-element'
import { html } from 'lit-element'

import '@material/mwc-button'
import { PageStyles } from './page-styles'

class MainPage extends PageViewElement {
  static get styles() {
    return [PageStyles]
  }

  render() {
    return html`
    <mwc-button unelevated dense @click="${_ =>
      updateLocation('/view/1')}">go view 1</mwc-button>
    `
  }
}

window.customElements.define('main-page', MainPage)
