
## Events

Add an event listener to an element with the `@eventname` binding.

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

    increment() {
      this.num += 1;
    }

    render() {
      return html`
        <h2>Counter</h2>
        <p>count: ${this.num}</p>
        <button @click=${this.increment}>Add</button>
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

    increment() {
      this.num += 1;
    }

    render() {
      return html`
        <h2>Counter</h2>
        <p>count: ${this.num}</p>
        <button @click=${this.increment}>Add</button>
      `;
    }
  }
  customElements.define('cool-counter', Counter);
  ```

  </div>
  <cool-counter-4 slot="demo"></cool-counter-4>
</code-with-demo>

Event listeners can be anonymous functions too.

```typescript
html`<button @click=${() => this.num += 1}>Add</button>`
```

<div style="text-align: right">
  <a href="https://lit-element.polymer-project.org/guide/events">Learn more about events</a>
</div>