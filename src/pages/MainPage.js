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
        <article-list category='tech'></article-list>
      </div>
    `;
  }
}

window.customElements.define("main-page", MainPage);

export default MainPage;
