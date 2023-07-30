import styled from "styled-components";

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  .imgContainer {
    .landingPageImg {
      height: 50vh;
    }
    .btn {
      display: flex;
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      background-color: #49a8ff;
      color: white;
      font-size: 16px;
      padding: 12px 34px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  .advertising {
    margin: 5vh auto;
  }
`;
