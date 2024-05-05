import { CUSMTOM_ELEMENTS_NAME } from "../constants/customElementName.js";
import Component from "../components/Component.js";

class MainPage extends Component {
  constructor() {
    super([]);
  }

  async connectedCallback() {
    this.render();
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
    return `
      <div class='main-page__container'>
        <${CUSMTOM_ELEMENTS_NAME.ARTICLE_LIST} category='tech'></${CUSMTOM_ELEMENTS_NAME.ARTICLE_LIST}>
      </div>
    `;
  }
}

window.customElements.define(CUSMTOM_ELEMENTS_NAME.MAIN_PAGE, MainPage);

export default MainPage;
