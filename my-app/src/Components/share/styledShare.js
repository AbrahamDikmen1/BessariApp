import styled from "styled-components";
export const ShareContainer = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);

  .shareWrapper {
    padding: 10px;
  }

  .shareTop {
    display: flex;
    align-items: center;
  }

  .shareProfileImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .shareInput {
    color: black;
  
    align-items: center;
    display: flex;
    width: 100%;
    height: 70px;
    outline: none;
    resize: none;
    font-size: 16px;
    margin-top: 20px;
    border: 0;
    border-radius: 0;
    border-color: #bfbfbf;
    padding: 2px;
  }

  .shareInput:focus {
    outline: none;
  }

  .shareHr {
    margin: 20px;
  }

  .shareBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .shareOptions {
    display: flex;
    margin-left: 20px;
    margin: 10px;
  }

  .shareOption {
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
  }

  .shareIcon {
    font-size: 18px;
    margin-right: 3px;
  }

  .shareOptionText {
    font-size: 14px;
    font-weight: 500;
  }

  .shareButton {
    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: green;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: white;
  }
`;
