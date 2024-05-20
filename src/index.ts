import "./components/entry";
import { createRouter } from "./router";
import createPages from "./pages";
import { CUSTOM_ELEMENTS_NAME } from "./constants/customElementName";

const app = document.querySelector("#app");
const container = document.createElement("main");
const header = document.createElement(CUSTOM_ELEMENTS_NAME.APP_HEADER);
const footer = document.createElement(CUSTOM_ELEMENTS_NAME.APP_FOOTER);
app!.appendChild(header!);
app!.appendChild(container!);
app!.appendChild(footer!);

const pages = createPages(container!);
const router = createRouter();

router
  .addRoute("/", pages.main)
  .addRoute("/tech", pages.main)
  .addRoute("/design", pages.main)
  .addRoute("/article/:articleId", pages.article)
  .setNotFound(pages.notFound)
  .start();
