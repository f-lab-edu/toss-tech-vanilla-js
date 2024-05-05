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
        let { target } = e;

        if (target.matches("img")) {
          target = target.parentElement;
        }

        if (target.matches(NAV_BTN_SELECTOR)) {
          e.preventDefault();
          const { navigate } = target.dataset;
          router.navigate(navigate);
        }
      },
      false
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
