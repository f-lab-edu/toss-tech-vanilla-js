import { CUSMTOM_ELEMENTS_NAME } from "../constants/customElementName.js";

export { default as MainPage } from "./MainPage.js";
export { default as ArticleDetailPage } from "./ArticleDetailPage.js";

export default (container) => {
  const main = () => {
    container.innerHTML = `<${CUSMTOM_ELEMENTS_NAME.MAIN_PAGE}></${CUSMTOM_ELEMENTS_NAME.MAIN_PAGE}>`;
  };

  const article = (params) => {
    const { articleId } = params;
    container.innerHTML = `<${CUSMTOM_ELEMENTS_NAME.ARTICLE_DETAIL_PAGE} articleId=${articleId}></${CUSMTOM_ELEMENTS_NAME.ARTICLE_DETAIL_PAGE}>`;
  };

  return {
    main,
    article,
  };
};
