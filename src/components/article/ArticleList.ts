import { getArticleListByCategory } from "../../apis/getArticleList.js";
import { CUSTOM_ELEMENTS_NAME } from "../../constants/customElementName";
import { Article, Category } from "../../types";
import Component from "../Component.js";

const CATEGORY = {
  tech: "개발",
  design: "디자인",
};

class ArticleList extends Component {
  private category: Category = "tech";

  constructor() {
    super(["category"]);
    this.category = "tech";
  }

  async connectedCallback() {
    const category = this.getAttribute("category");
    this.category = category as Category;
    const articleList = await getArticleListByCategory(this.category);
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

  createHTML(articleList: Article[]) {
    return `
      <section>
        <h3 class='article-list__title'>${CATEGORY[this.category]}</h3>
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

window.customElements.define(CUSTOM_ELEMENTS_NAME.ARTICLE_LIST, ArticleList);

export default ArticleList;
