import { loadCSS } from "../../utils/loadCSS.js";

const createHeader = () => {
  loadCSS("components/layout/header.module.css");
  const header = document.createElement("header");
  header.id = "header";
  header.innerHTML = `
      <div class="header_container">
          <button data-navigate="/">
              <img src="https://camo.githubusercontent.com/3172b26e07f1edaa6f9683644f56ab6672632ac80d77157b157cf97f02b49456/68747470733a2f2f692e696d6775722e636f6d2f63647a727772742e706e67" alt="logo" class="logo" />
          </button>
          <nav>
            <ul class="nav_list">
                <li class="nav_item"><button data-navigate="/tech">개발</button></li>
            </ul>
          </nav>
      </div>
    `;
  return header;
};

export const loadHeader = () => {
  const headerContainer = document.getElementById("app");
  const firstChild = headerContainer.firstChild;
  headerContainer.insertBefore(createHeader(), firstChild);
};
