import { CUSMTOM_ELEMENTS_NAME } from "../../constants/customElementName.js";
import Component from "../Component.js";

class ArticleDetail extends Component {
  constructor() {
    super([
      "thumbnail",
      "title",
      "profileImage",
      "author",
      "position",
      "date",
      "content",
    ]);
  }

  get styles() {
    return `
      <style>
        .article-header__container {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .article-header__thumbnail {
            width: 100%;
            margin-top: 36px;
            border-radius: 12px;
        }
        .article-header__title {
            margin-top: 20px;
            margin-bottom: 0px;
            font-size: 48px;
            font-weight: 700;
            line-height: 1.25;
            color: rgb(51, 61, 75);
            word-break: keep-all;
            overflow-wrap: break-word;
        }
        .article-body__container {
            margin-top: 54px;
            display: flex;
            flex-direction: column;
        }
        .article-body__container p {
            font-size: 17px;
            letter-spacing: 0em;
            line-height: 1.6;
            font-weight: normal;
            color: var(--adaptiveGrey800);
            margin: 24px 0px 8px;
        }
        .article-body__container a {
            color: inherit;
            text-decoration: underline;
        }
      </style>
    `;
  }

  createHTML({
    thumbnail,
    title,
    profileImage,
    author,
    position,
    date,
    content,
  }) {
    return `
    <div>
        <header class='article-header__container'>
            <img
                class='article-header__thumbnail'
                srcset='${thumbnail}'
                alt='${title}_thumbnual'
            />
            <h2 class='article-header__title'>${title}</h2>
            <${CUSMTOM_ELEMENTS_NAME.ARTICLE_PROFILE}
                profileImage='${profileImage}'
                name='${author}'
                position='${position}'
                date='${date}'
            ></${CUSMTOM_ELEMENTS_NAME.ARTICLE_PROFILE}>
        </header>
        <div class="article-body__container">
            ${content}
        </div>
    </div> 
    `;
  }
}

customElements.define(CUSMTOM_ELEMENTS_NAME.ARTICLE_DETAIL, ArticleDetail);

export default ArticleDetail;
