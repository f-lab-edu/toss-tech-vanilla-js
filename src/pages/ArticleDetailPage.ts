import { CUSTOM_ELEMENTS_NAME } from "../constants/customElementName.js";
import Component from "../components/Component.js";
import { getArticleById } from "../apis/getArticle.js";

class ArticleDetailPage extends Component {
  constructor() {
    super(["article"]);
  }

  async connectedCallback() {
    const articleId = this.getAttribute("articleId");
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

  createHTML(article) {
    return `
      <div class='article-detail-page__container'>
        <div class="article-detail__container">
            <${CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL}
                thumbnail="${article.thumbnail}"
                title="${article.title}"
                profileImage="${article.profile_image}"
                author="${article.author}"
                position="${article.position}"
                date="${article.date}"
                content="${article.content}"
            </${CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL}>
        </div>
      </div>
    `;
  }
}

window.customElements.define(
  CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL_PAGE,
  ArticleDetailPage
);

export default ArticleDetailPage;
