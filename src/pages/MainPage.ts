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

    const mainPageContainer = document.createElement("div");
    mainPageContainer.className = "main-page__container";

    const articleList = document.createElement(
      CUSTOM_ELEMENTS_NAME.ARTICLE_LIST
    );
    articleList.setAttribute("category", currentPath);

    mainPageContainer.appendChild(articleList);

    return mainPageContainer;
  }
}

window.customElements.define(CUSTOM_ELEMENTS_NAME.MAIN_PAGE, MainPage);

export default MainPage;
