import { loadFooter } from "./footer.js";
import { loadHeader } from "./header.js";

export const createLayout = () => {
  document.addEventListener("DOMContentLoaded", loadHeader);
  document.addEventListener("DOMContentLoaded", loadFooter);
};
