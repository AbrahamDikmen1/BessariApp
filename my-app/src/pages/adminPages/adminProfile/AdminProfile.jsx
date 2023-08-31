import Feed from "../../../Components/feed/Feed";
import { AdminProfileContainer } from "./styledAdminProfile";
import { useDispatch, useSelector } from "react-redux";
import profilePicture from "../../../assets/nedladdning.jpg";

const AdminProfile = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(auth);
  return (
    <AdminProfileContainer>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="" alt="" />
              <img className="profileUserImg" src={profilePicture} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{auth.name}</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
          </div>
        </div>
      </div>
    </AdminProfileContainer>
  );
};
export default AdminProfile;
