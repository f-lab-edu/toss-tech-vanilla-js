import { CUSTOM_ELEMENTS_NAME } from "../../constants/customElementName";
import Component from "../Component";

class Footer extends Component {
  constructor() {
    super([]);
  }

  get styles() {
    return `
      <style>
        #footer {
          padding: 50px 0 100px 0;
          background-color: #f9fafb;
        }
        
        .footer_inner {
          max-width: 1064px;
          margin: auto;
          padding: 0 67px;
          box-sizing: border-box;
          width: 100%;
        }
        
        .footer_group_list {
          display: flex;
          padding-bottom: 50px;
        }
        
        .footer_site_group {
          min-width: 170px;
          margin: 0;
          padding: 0;
          color: #6b7684;
          list-style: none;
          font-size: 15px;
          line-height: 30px;
          box-sizing: border-box;
        }
        
        .footer_site_group_title {
          padding-bottom: 5px;
          color: #333d4b;
          font-weight: 700;
        }
        
        .footer_address {
          color: #8b95a1;
          font-size: 13px;
          font-style: normal;
          line-height: 20px;
        }
        
        .footer_address_company_name {
          display: block;
          padding-bottom: 16px;
          color: #333d4b;
          font-size: 15px;
          font-weight: 700;
        }
      </style>
    `;
  }

  createHTML() {
    const footer = document.createElement("footer");
    footer.id = "footer";

    const footerInner = document.createElement("div");
    footerInner.className = "footer_inner";
    footer.appendChild(footerInner);

    const footerGroupList = document.createElement("div");
    footerGroupList.className = "footer_group_list";
    footerInner.appendChild(footerGroupList);

    const footerSiteGroup1 = document.createElement("ul");
    footerSiteGroup1.className = "footer_site_group";
    footerGroupList.appendChild(footerSiteGroup1);

    const footerSiteGroupTitle1 = document.createElement("li");
    footerSiteGroupTitle1.className = "footer_site_group_title";
    footerSiteGroupTitle1.textContent = "토스테크";
    footerSiteGroup1.appendChild(footerSiteGroupTitle1);

    const footerSiteGroup1Item1 = document.createElement("li");
    footerSiteGroup1Item1.textContent = "의견 보내기";
    footerSiteGroup1.appendChild(footerSiteGroup1Item1);

    const footerSiteGroup2 = document.createElement("ul");
    footerSiteGroup2.className = "footer_site_group";
    footerGroupList.appendChild(footerSiteGroup2);

    const footerSiteGroupTitle2 = document.createElement("li");
    footerSiteGroupTitle2.className = "footer_site_group_title";
    footerSiteGroupTitle2.textContent = "토스";
    footerSiteGroup2.appendChild(footerSiteGroupTitle2);

    ["홈페이지", "회사 소개", "채용"].forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      footerSiteGroup2.appendChild(li);
    });

    const footerSiteGroup3 = document.createElement("ul");
    footerSiteGroup3.className = "footer_site_group";
    footerGroupList.appendChild(footerSiteGroup3);

    const footerSiteGroupTitle3 = document.createElement("li");
    footerSiteGroupTitle3.className = "footer_site_group_title";
    footerSiteGroupTitle3.textContent = "고객센터";
    footerSiteGroup3.appendChild(footerSiteGroupTitle3);

    [
      "전화: 1599-4905 (24시간 연중무휴)",
      "이메일: support@toss.im",
      "카카오톡: @toss",
    ].forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      footerSiteGroup3.appendChild(li);
    });

    const footerAddress = document.createElement("address");
    footerAddress.className = "footer_address";
    footerInner.appendChild(footerAddress);

    const companyName = document.createElement("strong");
    companyName.className = "footer_address_company_name";
    companyName.textContent = "㈜비바리퍼블리카";
    footerAddress.appendChild(companyName);

    footerAddress.insertAdjacentHTML(
      "beforeend",
      "Copyright © Viva Republica, Inc. All Rights Reserved."
    );

    return footer;
  }
}

window.customElements.define(CUSTOM_ELEMENTS_NAME.APP_FOOTER, Footer);

export default Footer;
