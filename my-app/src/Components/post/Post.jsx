import React from "react";
import { PostContainer } from "./styledPost";
import { MoreVert } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Users } from "../../dummyData";
import profilePicture from "../../assets/nedladdning.jpg";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <PostContainer>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={profilePicture} alt="" />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
          </div>
        </div>
      </div>
    </PostContainer>
  );
};

export default Post;
