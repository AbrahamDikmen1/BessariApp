import React from "react";
import { FooterContainer } from "./styledFooter";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="sb_footer_section_padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Sociala Medier</h4>
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
            <p>
              Bessari @{new Date().getFullYear()} HULDA LINDGRENS GATA 8, SE-421
              31 VÄSTRA FRÖLUNDA, TLF: 031 38 37 000, KONTAKT@BESSARI.SE
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/datapolicy-htm/">
              <div>
                <p>Datapolicy</p>
              </div>
            </a>

            <a href="/cookie/">
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
