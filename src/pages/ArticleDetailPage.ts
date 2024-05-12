import { CUSTOM_ELEMENTS_NAME } from "../constants/customElementName";
import Component from "../components/Component";
import { getArticleById } from "../apis/getArticle";
import createRouter from "../router";

type ArticleDetailPageProps = {
  thumbnail: string;
  title: string;
  profile_image: string;
  author: string;
  position: string;
  date: string;
  content: string;
};

class ArticleDetailPage extends Component {
  constructor() {
    super(["article"]);
  }

  async connectedCallback() {
    const router = createRouter();
    const articleId = this.getAttribute("articleId");
    if (!articleId) {
      router.navigate("/404");
      return;
    }

    const article = await getArticleById(articleId);
    this.props = article;

    this.render();
  }

  get styles() {
    return `
      <style>
        .article-detail-page__container {
            max-width: 700px;
            margin: 0 auto;
        }
        .article-detail__container {
            width: 92%;
            margin: 0 auto;
            margin-bottom: 80px;
      </style>
    `;
  }

  createHTML(article: ArticleDetailPageProps) {
    const articleDetailPageContainerElement = document.createElement("div");
    articleDetailPageContainerElement.classList.add(
      "article-detail-page__container"
    );

    const articleDetailContainerElement = document.createElement("div");
    articleDetailContainerElement.classList.add("article-detail__container");

    const articleDetailElement = document.createElement(
      CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL
    );
    articleDetailElement.setAttribute("thumbnail", article.thumbnail);
    articleDetailElement.setAttribute("title", article.title);
    articleDetailElement.setAttribute("profileImage", article.profile_image);
    articleDetailElement.setAttribute("author", article.author);
    articleDetailElement.setAttribute("position", article.position);
    articleDetailElement.setAttribute("date", article.date);
    articleDetailElement.setAttribute("content", article.content);

    articleDetailContainerElement.appendChild(articleDetailElement);
    articleDetailPageContainerElement.appendChild(
      articleDetailContainerElement
    );

    return articleDetailPageContainerElement;
  }
}

window.customElements.define(
  CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL_PAGE,
  ArticleDetailPage
);

export default ArticleDetailPage;
