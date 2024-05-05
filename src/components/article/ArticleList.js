import { getArticleListByCategory } from "../../apis/getArticleList.js";
import Component from "../Component.js";

class ArticleList extends Component {
  constructor() {
    super(["category"]);
  }

  async connectedCallback() {
    const category = this.getAttribute("category");
    const articleList = await getArticleListByCategory(category);
    this.props = articleList;
    this.render();
  }

  get styles() {
    return `
      <style>
        .article-list__title {
            width: 100%;
            background-color: #ffffff;
            display: inline-block;
            padding: 20px 0;
            margin: 50px 0 4px 0;
            font-size: 36px;
            font-weight: 700;
        }
        .article-list__container {
            display: flex;
            flex-direction: column;
            gap: 80px;
            margin-top: 16px;
            padding: 0;
        }
      </style>
    `;
  }

  createHTML(articleList) {
    return `
      <section>
        <h3 class='article-list__title'>개발</h3>
        <ul class='article-list__container'>
            ${articleList
              ?.map((article) => {
                return `
                    <article-list-item
                        id='${article.id}'
                        thumbnail='${article.thumbnail}'
                        title='${article.title}'
                        description='${article.description}'
                        date='${article.date}'
                    ></article-list-item>
                    `;
              })
              .join("")}       
        </ul>
      </section>
    `;
  }
}

window.customElements.define("article-list", ArticleList);

export default ArticleList;
