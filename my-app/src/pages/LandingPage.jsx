import React from "react";
import forelasning from "../assets/forelasning.jpg";
import { LandingPageContainer } from "../Components/StyledComponents/styledLandingPage";
import CardLayout from "../Components/CardLayout";
const LandingPage = () => {
  return (
    <LandingPageContainer>
      <div className="imgContainer">
        <img
          src={forelasning}
          alt="landingPageImg"
          className="landingPageImg"
          style={{ width: "100%" }}
        />
        {/* <button className="btn">BOKA FÖRELÄSARE</button> */}
      </div>

      <div className="advertising" >
        <CardLayout />
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
