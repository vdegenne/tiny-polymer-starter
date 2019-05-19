import { html } from 'lit-element'
import { PageViewElement } from './page-view-element'

import '@material/mwc-button'
import { PageStyles } from './page-styles'

class View1 extends PageViewElement {
  render() {
    return html`
    ${PageStyles}
    first view
    `
  }
}

window.customElements.define('view-1', View1)
