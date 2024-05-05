const NAV_BTN_SELECTOR = "a[data-navigate]";
import createRouter from "../router.js";

const router = createRouter();

export default class Component extends HTMLElement {
  constructor(attributes) {
    super();
    this.props = {};
    for (const attribute of attributes) {
      this.props[attribute] = this.getAttribute(attribute);
    }
    this.attachShadow({ mode: "open" });

    this.shadowRoot.addEventListener(
      "click",
      (e) => {
        const target = e.target.closest("a[data-navigate]");
        if (target) {
          e.preventDefault();
          const { navigate } = target.dataset;
          router.navigate(navigate);
        }
      },
      true
    );
  }

  connectedCallback() {
    this.render();
  }

  get styles() {
    return "";
  }

  createHTML(props) {
    return "";
  }

  render() {
    const html = this.createHTML(this.props);
    this.shadowRoot.innerHTML = `
        ${this.styles}
        ${html}
      `;
  }
}
