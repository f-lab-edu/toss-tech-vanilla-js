import { CUSTOM_ELEMENTS_NAME } from "../../constants/customElementName";
import Component from "../Component";

type ArticleProfileProps = {
  profileImage: string;
  name: string;
  position: string;
  date: string;
};

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
        .article-author-profile__content p{
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

  createHTML({ profileImage, name, position, date }: ArticleProfileProps) {
    const profileElement = document.createElement("div");
    profileElement.classList.add("article-author-profile");

    const profileImageElement = document.createElement("img");
    profileImageElement.classList.add("article-author-profile__img");
    profileImageElement.src = profileImage;
    profileImageElement.alt = `${name}_profile_image`;
    profileElement.appendChild(profileImageElement);

    const profileContentElement = document.createElement("div");
    profileContentElement.classList.add("article-author-profile__content");

    const profileInfoElement = document.createElement("p");
    profileInfoElement.classList.add("article-author-profile__info");

    const nameElement = document.createElement("span");
    nameElement.textContent = name;
    profileInfoElement.appendChild(nameElement);

    const positionElement = document.createElement("span");
    positionElement.textContent = `ㆍ${position}`;
    profileInfoElement.appendChild(positionElement);
    profileContentElement.appendChild(profileInfoElement);

    const dateElement = document.createElement("p");
    dateElement.classList.add("article-author-profile__date");
    dateElement.textContent = date;
    profileContentElement.appendChild(dateElement);

    profileElement.appendChild(profileContentElement);

    return profileElement;
  }
}

window.customElements.define(
  CUSTOM_ELEMENTS_NAME.ARTICLE_PROFILE,
  ArticleProfile
);

export default ArticleProfile;
