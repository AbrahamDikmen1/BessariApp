import React from "react";
import { FooterContainer } from "./styledFooter";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="sb_footer_section_padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <img src="fb" alt="" />{" "}
              </p>
              <p>
                <img src="twitter" alt="" />{" "}
              </p>
              <p>
                <img src="linkedin" alt="" />{" "}
              </p>
              <p>
                <img src="insta" alt="" />{" "}
              </p>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Kontakt</p>
              </div>
            </a>

            <a href="/terms">
              <div>
                <p>Datapolicy</p>
              </div>
            </a>

            <a href="/terms">
              <div>
                <p>Om Cookies</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
