import { CUSTOM_ELEMENTS_NAME } from "../constants/customElementName";

export { default as MainPage } from "./MainPage";
export { default as ArticleDetailPage } from "./ArticleDetailPage";
export { default as NotFoundPage } from "./NotFoundPage";

export default (container: HTMLElement) => {
  const main = () => {
    const mainPage = document.createElement(CUSTOM_ELEMENTS_NAME.MAIN_PAGE);
    container.appendChild(mainPage);
  };

  const article = (params: { articleId: string }) => {
    const { articleId } = params;
    const articleDetailPage = document.createElement(
      CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL_PAGE
    );
    articleDetailPage.setAttribute("article-id", articleId);
    container.appendChild(articleDetailPage);
  };

  const notFound = () => {
    const notFoundPage = document.createElement(
      CUSTOM_ELEMENTS_NAME.NOT_FOUND_PAGE
    );
    container.appendChild(notFoundPage);
  };

  return {
    main,
    article,
    notFound,
  };
};
