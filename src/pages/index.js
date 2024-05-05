export { default as MainPage } from "./MainPage.js";

export default (container) => {
  const main = () => {
    container.innerHTML = "<main-page></main-page>";
  };

  return {
    main,
  };
};
