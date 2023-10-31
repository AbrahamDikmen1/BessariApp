import Feed from "../Components/Feed";

import { useSelector } from "react-redux";
import profilePicture from "../assets/nedladdning.jpg";
import styled from "styled-components";
const AdminProfile = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <AdminProfileContainer>
      <div className="profileCover">
        <img className="profileUserImg" src={profilePicture} alt="" />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">{auth.name}</h4>
      </div>

      <div>
        <Feed />
      </div>
    </AdminProfileContainer>
  );
};
export default AdminProfile;

export const AdminProfileContainer = styled.div`
  .profileCover {
    background-color: rgb(69, 101, 126);
    opacity: 90%;
    height: 320px;
    text-align: center;
    position: relative;
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
    opacity: 100%;
  }

  .profileInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 90%;
    background-color: rgb(69, 101, 126);
  }

  .profileInfoName {
    font-size: 30px;
    color: white;
  }
`;
