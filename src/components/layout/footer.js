import { loadCSS } from "../../utils/loadCSS.js";

const createFooter = () => {
  loadCSS("components/layout/footer.module.css");
  const footer = document.createElement("footer");
  footer.id = "footer";
  footer.innerHTML = `
      <div class="footer_inner">
        <div class="footer_group_list">
            <ul class="footer_site_group">
                <li class="footer_site_group_title">토스테크</li>
                <li>의견 보내기</li>
            </ul>
            <ul class="footer_site_group">
                <li class="footer_site_group_title">토스</li>
                <li>홈페이지</li>
                <li>회사 소개</li>
                <li>채용</li>
            </ul>
            <ul class="footer_site_group">
                <li class="footer_site_group_title">고객센터</li>
                <li>전화: 1599-4905 (24시간 연중무휴)</li>
                <li>이메일: support@toss.im</li>
                <li>카카오톡: @toss</li>
            </ul>
        </div>
        <adress class="footer_adrress">
            <strong class="footer_adrress_company_name">㈜비바리퍼블리카</strong>
            Copyright © Viva Republica, Inc. All Rights Reserved.
        </adress>
      </div>
    `;
  return footer;
};

export const loadFooter = () => {
  const footerContainer = document.getElementById("app");
  footerContainer.appendChild(createFooter());
};
