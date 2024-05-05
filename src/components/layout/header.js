import { CUSMTOM_ELEMENTS_NAME } from "../../constants/customElementName.js";
import Component from "../Component.js";

export default class Header extends Component {
  constructor() {
    super([]);
  }

  get styles() {
    return `
      <style>
        #header {
          position: sticky;
          top: 0;
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid rgba(0, 27, 55, 0.1);
          height: 60px;
          background-color: white;
          z-index:100;
        }
        
        .header_container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1140px;
          padding: 0 40px;
          box-sizing: border-box;
        }
        
        .logo {
          width: 110px;
          height: 20px;
        }
        
        .nav_item {
          padding: 12px 10px;
          font-size: 15px;
          line-height: 20px;
          color: currentColor;
          border-radius: 8px;
          border: 0;
          cursor: pointer;
          background-color: transparent;
          text-decoration: none;
          text-align: left;
        }
        
        .nav_item:hover {
          background-color: rgba(0, 27, 55, 0.05);
        }
      </style>
    `;
  }

  createHTML() {
    return `
      <header id="header">
          <div class="header_container">
              <a href="/tech" data-navigate="/tech">
                  <img src="https://camo.githubusercontent.com/3172b26e07f1edaa6f9683644f56ab6672632ac80d77157b157cf97f02b49456/68747470733a2f2f692e696d6775722e636f6d2f63647a727772742e706e67" alt="logo" class="logo" />
              </a>
              <nav>
                <div class="nav_list">
                   <a href="/tech" data-navigate="/tech" class="nav_item">개발</a>
                </div>
              </nav>
          </div>
      </header>
    `;
  }
}

window.customElements.define(CUSMTOM_ELEMENTS_NAME.APP_HEADER, Header);
