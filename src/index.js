import createRouter from "./router.js";
import createPages from "./pages/index.js";
import { createLayout } from "./components/layout/index.js";

const container = document.querySelector("main");
const pages = createPages(container);
const router = createRouter();

router
  .addRoute("/", pages.main)
  .addRoute("/article/:id", pages.article)
  .setNotFound(pages.notFound)
  .start();

createLayout();

const NAV_BTN_SELECTOR = "button[data-navigate]";

document.body.addEventListener("click", (e) => {
  const { target } = e;
  if (target.matches(NAV_BTN_SELECTOR)) {
    const { navigate } = target.dataset;
    router.navigate(navigate);
  }
});
