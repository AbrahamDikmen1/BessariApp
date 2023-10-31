import React from "react";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

const ContactPage = () => {
  const [state, setState] = useState(false);
  let number = "073 - 916 16 03";
  let coverNumber = "073 - 916 xx xx";

  const mail = "Bessariconsulting@gmail.com";

  const handlePhoneNrState = () => {
    setState(true);
  };

  return (
    <ContactPageContainer>
      <div className="topContactInfo">
        <h1> Kontakt </h1>
        <h2> Välkommen att kontakta oss! </h2>

        <Grid container spacing={4} direction="row">
          <Grid item xs={12}>
            <Button
              onClick={() => handlePhoneNrState()}
              style={{ color: "white" }}
            >
              <PhoneIcon sx={{ mr: "17px", fontSize: "2.7rem" }} />
              <p>{state ? number : coverNumber}</p>
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              style={{ color: "white" }}
              href={`mailto:Bessariconsulting@gmail.com`}
            >
              <LocalPostOfficeIcon sx={{ mr: "17px", fontSize: "2.7rem" }} />
              <Typography style={{ textTransform: "none" }}>
                {" "}
                {mail}{" "}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>

      <div className="bodyContactInfo"></div>
    </ContactPageContainer>
  );
};

export default ContactPage;

export const ContactPageContainer = styled.div`
  width: 100%;
  align-items: center;

  .topContactInfo {
    padding: 50px;
    background-color: rgb(69, 101, 126);
    text-align: left;
    height: 40vh;
    opacity: 90%;
  }

  h1 {
    color: #ffffff73;
    font-size: 1.2rem;
    font-weight: 500;
  }

  h2 {
    margin-bottom: 50px;
    color: #ffffff;
    font-weight: 600;
    font-size: 2.4rem;
  }

  .contaktAddress {
    background-color: #eff0f4;
    width: 20rem;
    border: 10px;
    border-radius: 3px;
  }

  p {
    font-family: "futura-pt", Sans-serif;
    max-width: 50rem;
    line-height: 1.5rem;
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    font-weight: 500;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  a {
    font-family: "futura-pt", Sans-serif;
    max-width: 50rem;
    line-height: 1.5rem;
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    font-weight: 500;
  }

  .bodyContactInfo {
    height: 27rem;
  }
`;
