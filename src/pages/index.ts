import { CUSTOM_ELEMENTS_NAME } from "../constants/customElementName";

export { default as MainPage } from "./MainPage";
export { default as ArticleDetailPage } from "./ArticleDetailPage";
export { default as NotFoundPage } from "./NotFoundPage";

export default (container: HTMLElement) => {
  const main = () => {
    container.innerHTML = `<${CUSTOM_ELEMENTS_NAME.MAIN_PAGE}></${CUSTOM_ELEMENTS_NAME.MAIN_PAGE}>`;
  };

  const article = (params: { articleId: string }) => {
    const { articleId } = params;
    container.innerHTML = `<${CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL_PAGE} articleId=${articleId}></${CUSTOM_ELEMENTS_NAME.ARTICLE_DETAIL_PAGE}>`;
  };

  const notFound = () => {
    container.innerHTML = `<${CUSTOM_ELEMENTS_NAME.NOT_FOUND_PAGE}></${CUSTOM_ELEMENTS_NAME.NOT_FOUND_PAGE}>`;
  };

  return {
    main,
    article,
    notFound,
  };
};
