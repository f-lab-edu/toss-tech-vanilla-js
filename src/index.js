import "./components/entry.js";
import createRouter from "./router.js";
import createPages from "./pages/index.js";

const container = document.querySelector("main");
const pages = createPages(container);
const router = createRouter();

router
  .addRoute("/", pages.main)
  .addRoute("/tech", pages.main)
  .addRoute("/article/:articleId", pages.article)
  .setNotFound(pages.notFound)
  .start();
