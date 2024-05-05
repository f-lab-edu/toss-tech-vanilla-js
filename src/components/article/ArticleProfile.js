import { CUSMTOM_ELEMENTS_NAME } from "../../constants/customElementName.js";
import Component from "../Component.js";

class ArticleProfile extends Component {
  constructor() {
    super(["profileImage", "name", "position", "date"]);
  }

  get styles() {
    return `
      <style>
        .article-author-profile {
            display: flex;
            height: fit-content;
            -webkit-box-align: center;
            align-items: center;
            margin-top: 20px;
        }
        .article-author-profile__img {
            width: 48px;
            height: 48px;
            border-radius: 156px;
            margin-right: 14px;
        }
        .article-author-profile__contant p{
            margin: 0px;
            line-height: 1.5;
        }
        .article-author-profile__info {
            margin: 0px;
            font-size: 17px;
            font-weight: 600;
            color: rgb(78, 89, 104);
            white-space: nowrap;
        }
        .article-author-profile__date {
            font-size: 14px;
            color: rgb(139, 149, 161);      
        }
      </style>
    `;
  }

  createHTML({ profileImage, name, position, date }) {
    return `
      <div class='article-author-profile'>
        <img
          class='article-author-profile__img'
          src='${profileImage}'
          alt='${name}_profile_image'
        />
        <div class='article-author-profile__contant'>
          <p class='article-author-profile__info'>
            <span>${name}</span>
            <span>ㆍ${position}</span>
          </p>
          <p class='article-author-profile__date'>${date}</p>
        </div>
      </div>
    `;
  }
}

window.customElements.define(
  CUSMTOM_ELEMENTS_NAME.ARTICLE_PROFILE,
  ArticleProfile
);

export default ArticleProfile;
