import { CUSTOM_ELEMENTS_NAME } from "../../constants/customElementName";
import Component from "../Component";

export default class Header extends Component {
  constructor() {
    super([]);
  }

  connectedCallback() {
    this.render();
    this.addCareerButtonEvent();
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
        .nav_list {
          display: flex;
          align-items: center;
          gap: 16px;
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
        .nav_list button {
            margin: 0;
            padding : 7px 12px;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            color: #f9fafb;
            background-color: #3182f6;
            border: 0 solid transparent;
            transition: background .2s ease, color .1s ease;
            border-radius: 6px;
            cursor: pointer;
            height: 32px;
        }
        .nav_list button:hover {
            background-color: #0f65e5;
        }
      </style>
    `;
  }

  addCareerButtonEvent = () => {
    const button = this.shadowRoot!.querySelector("button");
    button?.addEventListener("click", () => {
      window.location.href = "https://toss.im/career/jobs";
    });
  };

  createHTML() {
    return `
      <header id="header">
          <div class="header_container">
              <a href="/tech" data-navigate="/tech">
                  <img src="https://camo.githubusercontent.com/3172b26e07f1edaa6f9683644f56ab6672632ac80d77157b157cf97f02b49456/68747470733a2f2f692e696d6775722e636f6d2f63647a727772742e706e67" alt="logo" class="logo" />
              </a>
              <nav>
                <div class="nav_list">
                <a href="/design" data-navigate="/design" class="nav_item">디자인</a>
                   <a href="/tech" data-navigate="/tech" class="nav_item">개발</a>
                   <button>채용 바로가기</button>
                </div>
              </nav>
          </div>
      </header>
    `;
  }
}

window.customElements.define(CUSTOM_ELEMENTS_NAME.APP_HEADER, Header);
