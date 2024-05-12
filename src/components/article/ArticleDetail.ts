import { CUSTOM_ELEMENTS_NAME } from "../../constants/customElementName";
import Component from "../Component";

type Props = {
  thumbnail: string;
  title: string;
  profileImage: string;
  author: string;
  position: string;
  date: string;
  content: string;
};

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
  }: Props) {
    const articleDetailElement = document.createElement("div");

    const articleHeaderElement = document.createElement("header");
    articleHeaderElement.className = "article-header__container";

    const thumbnailElement = document.createElement("img");
    thumbnailElement.className = "article-header__thumbnail";
    thumbnailElement.srcset = thumbnail;
    thumbnailElement.alt = `${title}_thumbnail`;
    articleHeaderElement.appendChild(thumbnailElement);

    const titleElement = document.createElement("h2");
    titleElement.className = "article-header__title";
    titleElement.textContent = title;
    articleHeaderElement.appendChild(titleElement);

    const profileElement = document.createElement(
      CUSTOM_ELEMENTS_NAME.ARTICLE_PROFILE
    );
    profileElement.setAttribute("profileImage", profileImage);
    profileElement.setAttribute("name", author);
    profileElement.setAttribute("position", position);
    profileElement.setAttribute("date", date);
    articleHeaderElement.appendChild(profileElement);

    const articleBodyElement = document.createElement("div");
    articleBodyElement.className = "article-body__container";
    articleBodyElement.innerHTML = content;

    articleDetailElement.appendChild(articleHeaderElement);
    articleDetailElement.appendChild(articleBodyElement);

    return articleDetailElement;
  }
}

customElements.define(CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL, ArticleDetail);

export default ArticleDetail;
