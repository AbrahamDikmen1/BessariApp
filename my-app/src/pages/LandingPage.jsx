import React from "react";

import { LandingPageContainer } from "../Components/StyledComponents/styledLandingPage";
import CardLayout from "../Components/CardLayout";

import Carousel from "../Components/StyledComponents/CarouselLandingPage";
const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Carousel />

      <div className="advertising">
        <CardLayout />
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
