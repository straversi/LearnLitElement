
## Properties

Add an observed property to a custom element by <inline-switcher><span slot="ts">decorating a class property with `@property`</span><span slot="js">defining the `properties` getter</span></inline-switcher>. LitElement will then observe it and re-render the custom element when it changes.

Use a property in a template by embedding it with `${this.propertyName}` syntax.

<code-with-demo>
  <div slot="ts">

  ```typescript
  import {customElement, LitElement,
    html, css, property} from 'lit-element'

  @customElement('cool-counter')
  class Counter extends LitElement {
    @property() num = 0;

    static styles = css`
      h2 { color: #6f42c1; }
    `;

    render() {
      return html`
        <h2>Counter</h2>
        <p>count: ${this.num}</p>
      `;
    }
  }
  ```

  </div>
  <div slot="js">

  ```javascript
  import {LitElement, html, css}
    from 'lit-element'

  class Counter extends LitElement {
    static get properties() {
      return {
        num: { type: Number }
      }
    }

    constructor() {
      super();
      this.num = 0;
    }

    static get styles() {
      return css`
        h2 { color: #6f42c1; }
      `;
    }

    render() {
      return html`
        <h2>Counter</h2>
        <p>count: ${this.num}</p>
      `;
    }
  }
  customElements.define('cool-counter', Counter);
  ```

  </div>
  <cool-counter-3 slot="demo"></cool-counter-3>
</code-with-demo>

Properties <inline-switcher><span slot="ts">decorated with `@property`</span><span slot="js">returned by the `properties` getter</span></inline-switcher> can be set from HTML with an attribute.

```html
<cool-counter num="4"></cool-counter>
```

<div style="text-align: right">
  <a href="https://lit-element.polymer-project.org/guide/properties">Learn more about properties</a>
</div>