<link rel="stylesheet" href="/css/index.css" />
<link rel="stylesheet" href="/css/prism-material-light.css" />
<script type="module" src="/javascript/cool-counter.js"></script>
<script type="module" src="/javascript/code-example.js"></script>


<div id="hook">
  <h1>Learn LitElement</h1>
  <p>Build custom elements easily<br>with LitElement</p>
</div>

<div class="section">

  ## Make a custom element

  Define a JavaScript class that extends `LitElement`. Make a custom element and name it with the `@customElement` decorator. Custom element names must contain a dash.

  <code-switcher ts>
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
  not written yet.
  ```

  </div>
  </code-switcher>

  The element `<cool-counter>` is now usable in HTML.

  ```html
  <cool-counter></cool-counter>
  ```

</div>

<div class="section">

  ## Templates

  Define the structure of a custom element by implementing a `render` method. This method needs to return a tagged template literal of the form <code>html``</code>.

  <code-example ts>
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
  have not written yet
  ```
  
  </div>
  <cool-counter-1 slot="demo"></cool-counter-1>
  </code-example>

  JavaScript supports template literals, also called template strings. They’re like strings, except they use backticks instead of quotes, and you can embed expressions in them.

  ```typescript
  `${100 + 1} dalmatians` === "101 dalmatians"
  ```

  A tagged template literal has an expression (called the tag) immediately preceding the template literal. The tags, which are usually functions, can mess with the template literal before it finishes evaluating. Defining a tag is beyond the scope of this tutorial.

  In LitElement, the html tag denotes indicates that the template contains HTML. The render return expression can contain any valid HTML.

  <div style="text-align: right">
    <a href="https://lit-element.polymer-project.org/guide/templates">Learn more about templates</a>
  </div>

</div>

<div class="section">

  ## Styles

  Add styles by defining the `styles` property.

  <code-example ts>
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
  have not written yet
  ```
  
  </div>
  <cool-counter-2 slot="demo"></cool-counter-2>
  </code-example>

  These styles only apply to the custom element. They won’t affect any other elements in the DOM. This often enables simpler CSS selectors without fear of messing up other elements on the page.

  <div style="text-align: right">
    <a href="https://lit-element.polymer-project.org/guide/styles">Learn more about styles</a>
  </div>

</div>

<div class="section">

  ## Properties

  Add a property to a custom element by decorating a class property with `@property`. LitElement will then observe it and re-render the custom element when it changes.

  Use a property in a template by embedding it with `${this.propertyName}` syntax.

  <code-example ts>
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
  have not written yet
  ```
  
  </div>
  <cool-counter-3 slot="demo"></cool-counter-3>
  </code-example>

  Properties decorated with `@property` can be set from HTML with an attribute.

  ```html
  <cool-counter num="4"></cool-counter>
  ```

  <div style="text-align: right">
    <a href="https://lit-element.polymer-project.org/guide/properties">Learn more about properties</a>
  </div>

</div>

<div class="section">

  ## Events

  Add an event listener to an element with the `@eventname` binding.

  <code-example ts>
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
  have not written yet
  ```
  
  </div>
  <cool-counter-4 slot="demo"></cool-counter-4>
  </code-example>

  Event listeners can be anonymous functions too.

  ```typescript
  html`<button @click=${() => this.num += 1}>Add</button>`
  ```

  <div style="text-align: right">
    <a href="https://lit-element.polymer-project.org/guide/events">Learn more about events</a>
  </div>

</div>

<div class="section">

  ## Slots

  Make the content of a custom element configurable by using `<slot>` in the template.

  <code-example ts>
  <div slot="ts">

  ```typescript
  import {customElement, LitElement,
    html} from 'lit-element';

  @customElement('i-love')
  class ILove extends LitElement {
    render() {
      return html`
        <h2>I love</h2>
        <slot></slot>
        </h2>only!</h2>
      `;
    }
  }
  ```

  ```html
  <!-- HTML -->
  <i-love>
    <p>snowboarding</p>
  </i-love>
  <i-love>
    <img src="/snowboarder.png" />
  </i-love>
  ```

  </div>
  <div slot="js">

  ```javascript
  have not written yet
  ```
  
  </div>
  <i-love slot="demo">
    <p>snowboarding</p>
  </i-love>
  <i-love slot="demo">
    <img width="128" src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/snowboarder.png" />
  </i-love>
  </code-example>

  ### Slot names

  When there is more than one slot, use names to indicate where content should be distributed.

  <code-example ts>
  <div slot="ts">

  ```typescript
  import {customElement, LitElement,
    html} from 'lit-element';

  @customElement('my-preferences')
  class MyPreferences extends LitElement {
    render() {
      return html`
        <h2>I like</h2>
        <slot name="like"></slot>
        </h2>but I love</h2>
        <slot name="love"></slot>
      `;
    }
  }
  ```

  ```html
  <!-- HTML -->
  <my-preferences>
    <p slot="like">skiing</p>
    <img slot="love" src="/snowboarder.png" />
  </my-preferences>
  ```

  </div>
  <div slot="js">

  ```javascript
  have not written yet
  ```
  
  </div>
  <my-preferences slot="demo">
    <p slot="like">skiing</p>
    <img slot="love" width="128" src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/snowboarder.png" />
  </my-preferences>
  </code-example>

  <div style="text-align: right">
    <a href="https://lit-element.polymer-project.org/guide/templates#slots">Learn more about slots</a>
  </div>
</div>