import createRouter from "./router";
import createPages from "./pages";

const container = document.querySelector("main");
const pages = createPages(container);
const router = createRouter();

router
  .addRoute("/", pages.main)
  .addRoute("/article/:id", pages.artcle)
  .setNotFound(pages.notFound)
  .start();

const NAV_BTN_SELECTOR = "button[data-navigate]";

document.body.addEventListener("click", (e) => {
  const { target } = e;
  if (target.matches(NAV_BTN_SELECTOR)) {
    const { navigate } = target.dataset;
    router.navigate(navigate);
  }
});
