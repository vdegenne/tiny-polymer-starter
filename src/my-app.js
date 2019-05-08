import { LitElement, html, css } from 'lit-element'
import { updateMetadata, installRouter } from 'pwa-helpers'

import './main-view.js'
import './view-1.js'

import '@polymer/paper-styles/paper-styles'
import { LayoutStyles } from './layout-styles.js'

class MyApp extends LitElement {
  static get properties() {
    return {
      appTitle: { type: String },
      path: { type: String }
    }
  }

  static get styles() {
    return [
      css`
      :host {
        display: block;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      header {
        padding: 10px;
        background: black;
        color: white;
      }

      .main-content {
        flex: 1;
      }

      .page {
        display: none;
        flex: 1;
      }
      .page[active] {
        display: block;
      }

      footer {
        text-align: center;
        font-size: 80%;
      }
      `,
      LayoutStyles
    ]
  }

  render() {
    return html`
    <header>${this.appTitle}</header>

    <main role="main" class="main-content hflex">
      <main-page class="page" ?active="${this.path === '/'}"></main-page>
      <view-1 class="page" ?active="${this.path === '/view/1'}"></view-1>
    </main>

    <footer>&copy; All Rights Reserved</footer>
    `
  }

  firstUpdated() {
    window.updateLocation = location => {
      if (typeof location === 'string') {
        window.history.pushState({}, '', location)
        location = window.location
      }
      this.path = location.pathname
    }
    installRouter(updateLocation)
  }

  updated(changedProps) {
    if (changedProps.has('path')) {
      const pageTitle = this.appTitle + ' - ' + this.path.replace(/\//g, ' ')
      updateMetadata({
        title: pageTitle,
        description: pageTitle
      })
    }
  }
}

window.customElements.define('my-app', MyApp)
