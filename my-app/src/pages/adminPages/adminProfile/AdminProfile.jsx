import Feed from "../../../Components/feed/Feed";
import { AdminProfileContainer } from "./styledAdminProfile";
import { useSelector } from "react-redux";
import profilePicture from "../../../assets/nedladdning.jpg";
import bessariLogo from "../../../assets/bessariLogo.png";
const AdminProfile = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <AdminProfileContainer>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileUserImg" src={profilePicture} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{auth.name}</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed name={auth.name} />
          </div>
        </div>
      </div>
    </AdminProfileContainer>
  );
};
export default AdminProfile;
