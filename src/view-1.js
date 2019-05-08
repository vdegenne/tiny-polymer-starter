import { html } from 'lit-element'
import { PageViewElement } from './page-view-element'

import '@material/mwc-button'

class View1 extends PageViewElement {
  render() {
    return html`
    <div class="vflex centered" style="height:100%">
      <p>view 1</p>
      <mwc-button unelevated dense @click="${_ =>
        updateLocation('/')}">go back</mwc-button>
    </div>
    `
  }
}

window.customElements.define('view-1', View1)
