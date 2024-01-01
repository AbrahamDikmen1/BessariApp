import React from "react";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <div className="topInfo">
        <h1>Om oss</h1>
        <h2>Bessari Consulting AB</h2>
        <p>
          Jag brinner för att skapa lösningar som främjar aktivt deltagande och
          inkludering av målgruppen inom Socialt Arbete. Min passion för
          rättvisa och demokrati motiverar mitt arbete. Jag är en av de få män i
          Skandinavien som aktivt engagerar sig i att bekämpa våld och förtryck
          i hederns namn från olika perspektiv, inklusive HBTQ-frågor. En av
          mina målsättningar är att påverka och revidera destruktiva normer
          kring maskulinitet till förmån för ökad jämställdhet och alla
          individers lika värde.
        </p>

        <p>
          Jag anser att det är viktigt att män tar ett större ansvar inom
          jämställdhetsarbetet. Särskilt när män utgör en betydande majoritet av
          de som begår våldbrott både inomhus och utomhus, bör vi vara en
          central del av lösningen, om inte hela lösningen själva. Jag tror
          starkt att män har mycket att vinna på att aktivt stödja feminism och
          jämställdhet. Jag anstränger mig för att föra dessa ämnen framåt och
          nå ut till män som vanligtvis inte involveras i diskussioner om
          feminism och jämställdhet. Jag är övertygad om att vi kan uppnå detta
          och mycket mer. Det är hög tid för männen att ta plats och aktivt
          bidra till ett mer jämställt samhälle.
        </p>
      </div>

      <div className="bodyInfo"></div>
    </AboutPageContainer>
  );
};

export default AboutPage;

export const AboutPageContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 390px) {
    .topInfo {
      padding: 25px;
      background-color: rgb(69, 101, 126);
      text-align: left;
      opacity: 90%;

      h1 {
        color: #ffffff73;
        font-size: 1.2rem;
        font-weight: 500;
      }

      h2 {
        color: #ffffff;
        font-weight: 600;
        font-size: 2.4rem;
      }

      p {
        font-family: "futura-pt", Sans-serif;
        max-width: 50rem;
        line-height: 1.9rem;
        padding: 5px;
        font-size: 1.4rem;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }

  @media screen and (min-width: 390px) {
    .bodyInfo {
      height: 18.2rem;
    }
  }
`;
