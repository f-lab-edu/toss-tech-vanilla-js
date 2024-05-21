import { CUSTOM_ELEMENTS_NAME } from "../constants/customElementName";

export { default as MainPage } from "./MainPage";
export { default as ArticleDetailPage } from "./ArticleDetailPage";
export { default as NotFoundPage } from "./NotFoundPage";
import "../styles/global.css";
import "../styles/reset.css";

export default (container: HTMLElement) => {
  const main = () => {
    const mainPage = document.createElement(CUSTOM_ELEMENTS_NAME.MAIN_PAGE);
    container.replaceChildren(mainPage);
  };

  const article = (params: { articleId: string }) => {
    const { articleId } = params;
    const articleDetailPage = document.createElement(
      CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL_PAGE
    );
    articleDetailPage.setAttribute("articleId", articleId);
    container.replaceChildren(articleDetailPage);
  };

  const notFound = () => {
    const notFoundPage = document.createElement(
      CUSTOM_ELEMENTS_NAME.NOT_FOUND_PAGE
    );
    container.replaceChildren(notFoundPage);
  };

  return {
    main,
    article,
    notFound,
  };
};
