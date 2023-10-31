import React from "react";

import styled from "styled-components";
import img from "../assets/Alan4.jpg";
import advertising from "../assets/Alan.Ali.jpg";
const LandingPage = () => {
  return (
    <LandingPageContainer>
      <div className="top">
        <img className="landingPageImg" src={img} alt="" />{" "}
      </div>

      <div className="advertising">
        <div className="justifyImg">
          <img className="profileImg" src={advertising} alt="advertising" />
        </div>

        <div className="about">
          <h1> Alán Ali</h1>
          <p>
            Jag brinner för att skapa lösningar som främjar aktivt deltagande
            och inkludering av målgruppen inom Socialt Arbete. Min passion för
            rättvisa och demokrati motiverar mitt arbete. Jag är en av de få män
            i Skandinavien som aktivt engagerar sig i att bekämpa våld och
            förtryck i hederns namn från olika perspektiv, inklusive
            HBTQ-frågor. En av mina målsättningar är att påverka och revidera
            destruktiva normer kring maskulinitet till förmån för ökad
            jämställdhet och alla individers lika värde.
          </p>
          <p>
            Jag anser att det är viktigt att män tar ett större ansvar inom
            jämställdhetsarbetet. Särskilt när män utgör en betydande majoritet
            av de som begår våldbrott både inomhus och utomhus, bör vi vara en
            central del av lösningen, om inte hela lösningen själva. Jag tror
            starkt att män har mycket att vinna på att aktivt stödja feminism
            och jämställdhet. Jag anstränger mig för att föra dessa ämnen framåt
            och nå ut till män som vanligtvis inte involveras i diskussioner om
            feminism och jämställdhet. Jag är övertygad om att vi kan uppnå
            detta och mycket mer. Det är hög tid för männen att ta plats och
            aktivt bidra till ett mer jämställt samhälle.
          </p>
        </div>
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;

  .top {
    background-color: rgb(69, 101, 126);
    height: 45rem;
    .landingPageImg {
      width: 100%;
      height: 45rem;
      opacity: 70%;
    }
  }

  @media (min-width: 700px) {
    .advertising {
      justify-content: center;
      margin: 5vh auto;
      display: flex;
    }
  }

  .profileImg {
    padding: 20px;
    width: 21rem;
    height: 21rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .about {
    text-align: left;
  }
  h1 {
    padding: 20px;
    font-size: 2rem;
    font-weight: 550;
  }

  p {
    padding: 20px;
    font-family: "futura-pt", Sans-serif;
    max-width: 50rem;
    line-height: 1.9rem;
    font-size: 1.4rem;
    font-weight: 500;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    background-color: transparent;
  }
`;
