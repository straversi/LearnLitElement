import {LitElement, html, css} from 'https://unpkg.com/lit-element?module';

class CodeExample extends LitElement {
  static get properties() {
    return {
      ts: { type: Boolean }
    }
  }
  constructor() {
    super();
    this.ts = false;
  }
  static get styles() {
    return css`
      #container {
        display: grid;
        grid-template-columns: 5fr 2fr;
      }
      #demo {
        border: 3px solid #fafafa;
        border-radius: 0px 5px 5px 0px; /* rounded right side */
        padding-left: 24px;
        padding-bottom: 12px;
      }
      #languages > * {
        display: inline;
        background: #fff;
        padding: 8px;
        font-size: 0.9em;
        line-height: 2;
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
  render() {
    return html`
    <div id="languages">
      <div
        class="${this.ts ? 'active' : ''}"
        @click=${() => {this.ts = true}}
      >TypeScript</div><!--
   --><div
        class="${this.ts ? '' : 'active'}"
        @click=${() => {this.ts = false}}
      >JavaScript</div>
    </div>
    <div id="container">
      <div>
        <slot name="ts" class="${this.ts ? '' : 'hidden'}"></slot>
        <slot name="js" class="${this.ts ? 'hidden' : ''}"></slot>
      </div>
      <div id="demo">
        <slot name="demo"></slot>
      </div>
    </div>
    `;
  }
}
customElements.define('code-example', CodeExample);