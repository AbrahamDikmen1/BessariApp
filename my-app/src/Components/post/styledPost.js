import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;

  .postWrapper {
    padding: 10px;
  }

  .postTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .postTopLeft {
    display: flex;
    align-items: center;
  }

  .postProfileImg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  .postUsername {
    font-size: 15px;
    font-weight: 500;
    margin: 0 10px;
  }

  .postDate {
    font-size: 12px;
  }

  .postCenter {
    margin: 20px 0;
  }

  .postText {
    cursor: default;
    display: flex;
    width: 100%;
    height: 70px;
    outline: none;
    resize: none;
    font-size: 16px;
    margin-top: 20px;
    min-height: 30vw;
    border: none;
    padding: 2px;
  }

  .postImg {
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }

  //Post modal

  .modal-card-customization {
    .modalImg {
      margin-top: 20px;
      width: 100%;
      max-height: 500px;
      object-fit: contain;
    }

    textarea {
      display: flex;
      width: 100%;
      height: 70px;
      outline: none;
      resize: none;
      font-size: 16px;
      margin-top: 20px;
      border-radius: 5px;
      border-color: #bfbfbf;
      padding: 2px;
    }
    textarea:is(:focus, :valid) {
      border-width: 2px;
      border-color: #4671ea;
    }

    .postImg {
      margin-top: 20px;
      width: 100%;
      max-height: 500px;
      object-fit: contain;
    }
  }

  .postBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .postBottomLeft {
    display: flex;
    align-items: center;
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

  .updateOption {
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
  }

  .updateIcon {
    font-size: 18px;
    margin-right: 3px;
  }

  .updateOptionText {
    font-size: 14px;
    font-weight: 500;
  }
`;
