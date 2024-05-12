import "./components/entry";
import createRouter from "./router";
import createPages from "./pages";

const app = document.querySelector("#app");
const container = document.createElement("main");
app!.appendChild(container!);

const pages = createPages(container!);
const router = createRouter();

router
  .addRoute("/", pages.main)
  .addRoute("/tech", pages.main)
  .addRoute("/design", pages.main)
  .addRoute("/article/:articleId", pages.article)
  .setNotFound(pages.notFound)
  .start();
