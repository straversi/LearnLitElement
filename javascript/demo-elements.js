/**
 * Custom elements for the demos throughout the tutorial.
 */

import {LitElement, html, css} from 'https://unpkg.com/lit-element?module';

/*
 * Section: Make a custom element
 */
class Counter0 extends LitElement {

}
customElements.define('cool-counter-0', Counter0);

/*
 * Section: Template
 */
class Counter1 extends LitElement {
  render() {
    return html`
      <h2>Counter</h2>
      <p>count: 0</p>
    `;
  }
}
customElements.define('cool-counter-1', Counter1);

/*
 * Section: Styles
 */
class Counter2 extends LitElement {
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
customElements.define('cool-counter-2', Counter2);

/*
 * Section: Properties
 */
class Counter3 extends LitElement {
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
customElements.define('cool-counter-3', Counter3);

/*
 * Section: Events
 */
class Counter4 extends LitElement {
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
      <button @click=${() => this.num++}>Add</button>
    `;
  }
}
customElements.define('cool-counter-4', Counter4);

/*
 * Section: Slots
 */
class ILove extends LitElement {
  render() {
    return html`
      <h2>I love</h2>
      <slot></slot>
      <h2>only!</h2>
    `;
  }
}
customElements.define('i-love', ILove);

class MyPreferences extends LitElement {
  render() {
    return html`
      <h2>I like</h2>
      <slot name="like"></slot>
      <h2>but I love</h2>
      <slot name="love"></slot>
    `;
  }
}
customElements.define('my-preferences', MyPreferences);