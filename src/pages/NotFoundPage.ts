import { CUSTOM_ELEMENTS_NAME } from "../constants/customElementName";
import Component from "../components/Component";

class NotFoundPage extends Component {
  constructor() {
    super([]);
  }

  async connectedCallback() {
    this.render();
  }

  get styles() {
    return `
      <style>
        .not-found-page__container {
            color: #000;
            height: 100vh;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .not-found-page__content {
            display: flex;
            align-items: center;
        }
        .not-found-page__content h1 {
            display: inline-block;
            border-right: 1px solid rgba(0, 0, 0, .3);
            margin: 0;
            margin-right: 20px;
            padding: 10px 23px 10px 0;
            font-size: 24px;
            font-weight: 500;
            vertical-align: top;
        }
        .not-found-page__content h2 {
            font-size: 14px;
            font-weight: normal;
            line-height: inherit;
            margin: 0;
            padding: 0;
        }
      </style>
    `;
  }

  createHTML() {
    const notFoundPageContainerElement = document.createElement("div");
    notFoundPageContainerElement.classList.add("not-found-page__container");

    const notFoundPageContentElement = document.createElement("div");
    notFoundPageContentElement.classList.add("not-found-page__content");

    const contenStatusElement = document.createElement("h1");
    contenStatusElement.textContent = "404";
    notFoundPageContentElement.appendChild(contenStatusElement);

    const contentDescriptionElement = document.createElement("h2");
    contentDescriptionElement.textContent = "This page could not be found.";
    notFoundPageContentElement.appendChild(contentDescriptionElement);

    return `
        <div class="not-found-page__container">
            <div class="not-found-page__content">
                <h1>404</h1>
                <h2>This page could not be found.</h2>
            </div>   
        </div>
    `;
  }
}

window.customElements.define(CUSTOM_ELEMENTS_NAME.NOT_FOUND_PAGE, NotFoundPage);

export default NotFoundPage;
