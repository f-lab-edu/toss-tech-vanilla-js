const NAV_ANCHOR_SELECTOR = "a[data-navigate]";
import createRouter from "../router";

const router = createRouter();

type Props = any;

export default class Component extends HTMLElement {
  public props: Props;

  constructor(attributes: string[]) {
    super();
    this.props = {};
    for (const attribute of attributes) {
      this.props[attribute] = this.getAttribute(attribute);
    }
    this.attachShadow({ mode: "open" });

    this.shadowRoot!.addEventListener(
      "click",
      (e) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest(
          NAV_ANCHOR_SELECTOR
        ) as HTMLAnchorElement | null;
        if (anchor && anchor.dataset.navigate) {
          e.preventDefault();
          const { navigate } = anchor.dataset;
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

  createHTML(props: Props): HTMLElement {
    return document.createElement("div");
  }

  render() {
    const html = this.createHTML(this.props);
    this.shadowRoot!.innerHTML = `
        ${this.styles}
        ${html}
      `;
  }
}
