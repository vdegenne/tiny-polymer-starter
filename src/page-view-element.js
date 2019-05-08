import { LitElement } from 'lit-element'
import { LayoutStyles } from './layout-styles'
import { PageStyles } from './page-styles'

export class PageViewElement extends LitElement {
  // Only render this page if it's actually visible.
  shouldUpdate() {
    return this.active
  }

  static get styles() {
    return [LayoutStyles, PageStyles]
  }

  static get properties() {
    return {
      active: { type: Boolean }
    }
  }
}
