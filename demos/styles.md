
## Styles

Add styles by defining the `styles` property.

<code-with-demo>
  <div slot="ts">

  ```typescript
  import {customElement, LitElement,
    html, css} from 'lit-element';

  @customElement('cool-counter')
  class Counter extends LitElement {
    static styles = css`
      h2 { color: #6f42c1; }
    `;

    render() {
      return html`
        <h2>Counter</h2>
        <p>count: 0</p>
      `;
    }
  }
  ```

  </div>
  <div slot="js">

  ```javascript
  import {LitElement, html, css}
    from 'lit-element';

  class Counter extends LitElement {
    static get styles() {
      return css`
        h2 { color: #6f42c1; }
      `;
    }

    render() {
      return html`
        <h2>Counter</h2>
        <p>count: 0</p>
      `;
    }
  }
  customElements.define('cool-counter', Counter);
  ```

  </div>
  <cool-counter-2 slot="demo"></cool-counter-2>
</code-with-demo>

These styles only apply to the custom element. They won’t affect any other elements in the DOM. This often enables simpler CSS selectors without fear of messing up other elements on the page.

<div style="text-align: right">
  <a href="https://lit-element.polymer-project.org/guide/styles">Learn more about styles</a>
</div>