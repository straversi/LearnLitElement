
## Templates

Define the structure of a custom element by implementing a `render` method. This method needs to return a tagged template literal of the form <code>html``</code>.

<code-with-demo>
  <div slot="ts">

  ```typescript
  import {customElement, LitElement,
    html} from 'lit-element';

  @customElement('cool-counter')
  class Counter extends LitElement {
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
  import {LitElement, html} from 'lit-element';

  class Counter extends LitElement {
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
  <cool-counter-1 slot="demo"></cool-counter-1>
</code-with-demo>

JavaScript supports template literals, also called template strings. They’re like strings, except they use backticks instead of quotes, and you can embed expressions in them.

```typescript
`${100 + 1} dalmatians` === "101 dalmatians"
```

A tagged template literal has an expression (called the tag) immediately preceding the template literal. The tags, which are usually functions, can mess with the template literal before it finishes evaluating. Defining a tag is beyond the scope of this tutorial.

In LitElement, the html tag denotes indicates that the template contains HTML. The render return expression can contain any valid HTML.

<div style="text-align: right">
  <a href="https://lit-element.polymer-project.org/guide/templates">Learn more about templates</a>
</div>