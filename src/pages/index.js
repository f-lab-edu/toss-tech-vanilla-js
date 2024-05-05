import { CUSMTOM_ELEMENTS_NAME } from "../constants/customElementName.js";

export { default as MainPage } from "./MainPage.js";

export default (container) => {
  const main = () => {
    container.innerHTML = `<${CUSMTOM_ELEMENTS_NAME.MAIN_PAGE}></${CUSMTOM_ELEMENTS_NAME.MAIN_PAGE}>`;
  };

  return {
    main,
  };
};
