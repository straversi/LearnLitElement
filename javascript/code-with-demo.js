/**
 * Helper elements for switching between TS and JS.
 */

import {LitElement, html, css} from 'https://unpkg.com/lit-element?module';

/**
 * Base class that adds the `ts` property. 
 */
class JsTsSwitcher extends LitElement {
  static get properties() {
    return {
      ts: { type: Boolean }
    }
  }
  constructor() {
    super();
    this.ts = true;
  }
}

/**
 * A code-block-switcher next to a demo.
 */
class CodeWithDemo extends JsTsSwitcher {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      #container {
        display: grid;
        grid-template-columns: 5fr 2fr;
      }
      #demo {
        margin-top: 34px;
        border: 3px solid #fafafa;
        border-radius: 0px 5px 5px 0px; /* rounded right side */
        padding-left: 24px;
        padding-bottom: 12px;
      }
    `;
  }
  render() {
    return html`
    <div id="container">
      <code-block-switcher .ts=${this.ts}>
        <slot name="ts" slot="ts"></slot>
        <slot name="js" slot="js"></slot>
      </code-block-switcher>
      <div id="demo">
        <slot name="demo"></slot>
      </div>
    </div>
    `;
  }
}
customElements.define('code-with-demo', CodeWithDemo);

/**
 * A block with tabs to switch between typescript and javascript.
 */
class CodeBlockSwitcher extends JsTsSwitcher {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      #languages > * {
        display: inline-block;
        background: #fff;
        padding: 8px;
        font-size: 0.9em;
        height: 18px;
        color: #aaa;
        cursor: pointer;
      }
      .active {
        background: #fafafa !important;
        color: #888 !important;
      }
      .hidden {
        display: none;
      }
    `;
  }
  setTs(ts) {
    this.dispatchEvent(new CustomEvent('ts', {
      bubbles: true,
      composed: true,
      detail: { ts },
    }))
    this.ts = ts;
  }
  render() {
    return html`
    <div id="languages">
      <div
        class="${this.ts ? 'active' : ''}"
        @click=${() => this.setTs(true)}
      >TypeScript</div><!--
   --><div
        class="${this.ts ? '' : 'active'}"
        @click=${() => this.setTs(false)}
      >JavaScript</div>
    </div>
    <slot name="ts" class="${this.ts ? '' : 'hidden'}"></slot>
    <slot name="js" class="${this.ts ? 'hidden' : ''}"></slot>
    `;
  }
}
customElements.define('code-block-switcher', CodeBlockSwitcher);

/**
 * A simple inline switch between TS and JS.
 */
class InlineSwitcher extends JsTsSwitcher {
  static get styles() {
    return css`
      .hidden {
        display: none;
      }
    `;      
  }
  render() {
    return html`
      <slot name="ts" class="${this.ts ? '' : 'hidden'}"></slot>
      <slot name="js" class="${this.ts ? 'hidden' : ''}"></slot>
    `
  }
}
customElements.define('inline-switcher', InlineSwitcher);

/* Switch the language of every code block. */
document.addEventListener('ts', (e) => {
  document.querySelectorAll(['code-with-demo, code-block-switcher, inline-switcher']).forEach(el => {
    el.ts = e.detail.ts;
  })
})