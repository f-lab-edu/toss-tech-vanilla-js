import { CUSTOM_ELEMENTS_NAME } from "../../constants/customElementName";
import Component from "../Component";

type ArticleListItemProps = {
  id: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
};

export default class ArticleListItem extends Component {
  constructor() {
    super(["id", "title", "description", "date", "thumbnail"]);
  }

  get styles() {
    return `
    <style>
        .article {
            display: flex;
            align-items: center;
            cursor: pointer;
            text-decoration: none;
            margin-bottom: var(--article-space);
            color: black;
        }
        .article__thumbnail {
          width: 240px;
          min-width: 240px;
          height: 240px;
          min-height: 240px;
          background-color: #f5f5f5;
          object-fit: cover;
          border-radius: 14px;
          margin-right: 48px;
          -webkit-transition: 0.2s ease-in-out;
          transition: 0.2s ease-in-out;
      }
        .article:hover .article__thumbnail {
            transform: translate3d(0, -3%, 0);
            box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
        }
        .article__content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            line-height: 1.6;
        }
        .article__title {
            display: inline-block;
            margin-top: 0;
            margin-bottom: 14px;
            overflow: hidden;
            font-size: 36px;
            font-weight: 700;
            line-height: 1.4;
            color: #333d4b;
            text-overflow: ellipsis;
            word-break: keep-all;
            overflow-wrap: break-word;
            -webkit-transition: color 0.3s ease;
            transition: color 0.3s ease;
            -webkit-line-clamp: 2;
        }
        .article:hover .article__title {
          color: #3182f6;
        }
        .article__description {
            display: block;
            margin: 0;
            margin-bottom: 12px;
            font-size: 17px;
            line-height: 1.6;
            color: #4e5968;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
        }
        .article__date {
            line-height: 1.6;
            color: #8b95a1;
            margin: 0;
            font-size: 15px;
        }
    </style>
    `;
  }

  createHTML({
    id,
    title,
    description,
    date,
    thumbnail,
  }: ArticleListItemProps) {
    const articleItemElement = document.createElement("a");
    articleItemElement.classList.add("article");
    articleItemElement.href = `/article/${id}`;
    articleItemElement.dataset.navigate = `/article/${id}`;

    const thumbnailElement = document.createElement("img");
    thumbnailElement.classList.add("article__thumbnail");
    thumbnailElement.srcset = thumbnail;
    thumbnailElement.alt = `${title} 썸네일 이미지`;

    const contentElement = document.createElement("div");
    contentElement.classList.add("article__content");

    const titleElement = document.createElement("h3");
    titleElement.classList.add("article__title");
    titleElement.textContent = title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("article__description");
    descriptionElement.textContent = description;

    const dateElement = document.createElement("p");
    dateElement.classList.add("article__date");
    dateElement.textContent = date;

    contentElement.appendChild(titleElement);
    contentElement.appendChild(descriptionElement);
    contentElement.appendChild(dateElement);

    articleItemElement.appendChild(thumbnailElement);
    articleItemElement.appendChild(contentElement);

    return articleItemElement;
  }
}

window.customElements.define(
  CUSTOM_ELEMENTS_NAME.ARTICLE_LIST_ITEM,
  ArticleListItem
);
