import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <div className="sb_footer_section_padding">
        <div className="sb__footer-below">
          <div>
            <Grid sx={{ flexGrow: 1 }} container>
              <div className="sb__footer-links_div">
                <Grid item xs={0}>
                  <Typography className="h4">Följ oss</Typography>
                </Grid>

                <Grid item xs={1.4}>
                  <a href="https://www.instagram.com/alanbessari/">
                    <Button style={{ color: "white" }}>
                      <InstagramIcon />
                    </Button>
                  </a>
                </Grid>

                <Grid item xs={1.4}>
                  <a href="https://www.facebook.com/alan.elektrafryshuset">
                    <Button style={{ color: "white" }}>
                      <FacebookIcon fontSize="medium" />
                    </Button>
                  </a>
                </Grid>

                <Grid item xs={1.4}>
                  <a href="https://www.linkedin.com/in/al%C3%A1n-ali-95282685/">
                    <Button style={{ color: "white" }}>
                      <LinkedInIcon fontSize="medium" />
                    </Button>
                  </a>
                </Grid>
                <span className="px"> | </span>

                <div className="sb__footer-ourWork">
                  <a href="/tidigare-arbeten">
                    <p>Tidigare arbeten</p>
                  </a>
                </div>
              </div>
            </Grid>
          </div>

          <div className="sb__footer-copyright">
            <p>© {new Date().getFullYear()} Bessari Consulting AB</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

export const FooterContainer = styled.div`
  width: 100%;
  background-color: rgb(69, 101, 126);

  .sb_footer_section_padding {
    padding: 2.5rem 4rem;
    background-color: #2d2d32;
    position: static;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .h4 {
    font-size: 18px;
  }

  .sb__footer-below {
    text-align: center;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }

  .sb__footer-links {
    font-size: 16px;
    width: 100%;
    text-align: left;
  }
  .sb__footer-links a {
    color: white;
    padding: 20px;
    font-size: 30px;
    font-weight: bold;

    text-decoration: none;
  }

  .sb__footer-links_div {
    display: flex;
    color: white;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .sb__footer-links_div .px {
    color: white;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .sb__footer-ourWork {
    & a {
      font-size: 18px;
      color: white;
    }

    &:hover a {
      color: #b6c7d6;
    }

    &:hover p {
      color: #b6c7d6;
    }
  }
  .sb__footer-ourWork p {
    color: rgb(255, 255, 255);
  }

  .sb__footer-copyright {
    justify-content: center;
  }
  .sb__footer-copyright p {
    justify-content: center;
    text-align: right;
    font-size: 15px;
    line-height: 15px;
    color: rgb(255, 255, 255);
    font-weight: 600;
  }

  @media screen and (max-width: 850px) {
    .sb__footer-heading h1 {
      font-size: 44px;
      line-height: 50px;
    }
  }

  @media screen and (max-width: 550px) {
    .sb__footer-heading h1 {
      font-size: 34px;
      line-height: 42px;
    }

    .sb__footer-links div {
      margin: 1rem 0;
    }

    .sb__footer-below {
      flex-direction: column;
      justify-content: left;
    }

    .sb__footer-below-links {
      flex-direction: column;
    }

    .sb__footer-below-links p {
      margin-left: 0rem;
      margin-top: 1rem;
    }
  }
`;
