import { getArticleListByCategory } from "../../apis/getArticleList";
import { CUSTOM_ELEMENTS_NAME } from "../../constants/customElementName";
import { Article, Category } from "../../types";
import Component from "../Component";

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
    const articleItemSectionElement = document.createElement("section");

    const articleListTitleElement = document.createElement("h3");
    articleListTitleElement.classList.add("article-list__title");
    articleListTitleElement.textContent = CATEGORY[this.category];
    articleItemSectionElement.appendChild(articleListTitleElement);

    const articleListContainerElement = document.createElement("ul");
    articleListContainerElement.classList.add("article-list__container");

    articleList?.forEach((article) => {
      const articleListItemElement = document.createElement(
        CUSTOM_ELEMENTS_NAME.ARTICLE_LIST_ITEM
      ) as any;
      articleListItemElement.id = article.id;
      articleListItemElement.thumbnail = article.thumbnail;
      articleListItemElement.title = article.title;
      articleListItemElement.description = article.description;
      articleListItemElement.date = article.date;
      articleListContainerElement.appendChild(articleListItemElement);
    });

    articleItemSectionElement.appendChild(articleListContainerElement);

    return articleItemSectionElement;
  }
}

window.customElements.define(CUSTOM_ELEMENTS_NAME.ARTICLE_LIST, ArticleList);

export default ArticleList;
