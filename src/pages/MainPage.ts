import { CUSTOM_ELEMENTS_NAME } from "../constants/customElementName";
import Component from "../components/Component";

class MainPage extends Component {
  constructor() {
    super([]);
  }

  get styles() {
    return `
      <style>
        .main-page__container {
          width: 92%;
          margin: 0 40px;
          color: #333d4b;
        }
      </style>
    `;
  }

  createHTML() {
    const currentPath = window.location.pathname.slice(1) || "tech";

    return `
      <div class='main-page__container'>
        <${CUSTOM_ELEMENTS_NAME.ARTICLE_LIST} category="${currentPath}"></${CUSTOM_ELEMENTS_NAME.ARTICLE_LIST}>
      </div>
    `;
  }
}

window.customElements.define(CUSTOM_ELEMENTS_NAME.MAIN_PAGE, MainPage);

export default MainPage;
