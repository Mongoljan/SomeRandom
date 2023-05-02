// Define the template for the component
const template = document.createElement('template');
template.innerHTML = `
  <style>
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .left-slot, .right-slot {
      margin: 0 10px;
    }
  </style>
  <div class="container">
    <slot name="left" class="left-slot"></slot>
    <slot name="right" class="right-slot"></slot>
  </div>
`;

// Define the custom component element
class MyComponent extends HTMLElement {
  constructor() {
    super();

    // Create a Shadow DOM and clone the template
    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);

    // Add the content to the Shadow DOM
    shadow.appendChild(content);
  }
}

customElements.define('my-component', MyComponent);
