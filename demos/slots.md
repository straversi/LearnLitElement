
## Slots

Make the content of a custom element configurable by using `<slot>` in the template.

<code-with-demo>
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
  import {LitElement, html} from 'lit-element';

  class ILove extends LitElement {
    render() {
      return html`
        <h2>I love</h2>
        <slot></slot>
        </h2>only!</h2>
      `;
    }
  }
  customElements.define('i-love', ILove);
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
  <i-love slot="demo">
    <p>snowboarding</p>
  </i-love>
  <i-love slot="demo">
    <img width="128" src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/snowboarder.png" />
  </i-love>
</code-with-demo>

### Slot names

When there is more than one slot, use names to indicate where content should be distributed.

<code-with-demo>
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
  import {LitElement, html} from 'lit-element';

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
  customElements.define('my-preferences', MyPreferences);
  ```

  ```html
  <!-- HTML -->
  <my-preferences>
    <p slot="like">skiing</p>
    <img slot="love" src="/snowboarder.png" />
  </my-preferences>
  ```

  </div>
  <my-preferences slot="demo">
    <p slot="like">skiing</p>
    <img slot="love" width="128" src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/snowboarder.png" />
  </my-preferences>
</code-with-demo>

<div style="text-align: right">
  <a href="https://lit-element.polymer-project.org/guide/templates#slots">Learn more about slots</a>
</div>