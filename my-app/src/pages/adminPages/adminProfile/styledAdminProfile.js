import styled from "styled-components";

export const AdminProfileContainer = styled.div`
  .profile {
    display: flex;
  }

  .profileRight {
    flex: 9;
  }

  .profileCover {
    height: 320px;
    text-align: center;
    position: relative;
  }

  .profileCoverImg {
    width: 70%;
    height: 320px;
    /* object-fit: cover; */
  }

  .profileUserImg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 150px;
    border: 3px solid white;
  }

  .profileInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .profileInfoName {
    font-size: 24px;
  }

  .profileInfoDesc {
    font-weight: 300;
  }

  .profileRightBottom {
    display: flex;
  }
`;
