
## Make a custom element

Define a JavaScript class that extends `LitElement`. Make a custom element and name it with <inline-switcher><span slot="ts">the `@customElement` decorator</span><span slot="js">`customElements.define`</span></inline-switcher>. Custom element names must contain a dash.

<code-block-switcher>
  <div slot="ts">

  ```typescript
  import {customElement, LitElement} from 'lit-element';

  @customElement('cool-counter')
  class Counter extends LitElement {
  }
  ```

  </div>
  <div slot="js">

  ```javascript
  import {LitElement} from 'lit-element';

  class Counter extends LitElement {
  }
  customElements.define('cool-counter', Counter);
  ```

  </div>
</code-block-switcher>

The element `<cool-counter>` is now usable in HTML.

```html
<cool-counter></cool-counter>
```