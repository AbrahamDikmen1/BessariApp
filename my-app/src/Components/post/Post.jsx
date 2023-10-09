import React from "react";
import { useState } from "react";
import { PostContainer } from "./styledPost";
import profilePicture from "../../assets/nedladdning.jpg";
import { format } from "timeago.js";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import PostModal from "./PostModal";
const ITEM_HEIGHT = 48;

const Post = ({ post, setDeletePost }) => {
  const auth = useSelector((state) => state.auth);

  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setAnchorEl(null);
  };

  const options = [
    {
      text: (
        <span
          onClick={() => {
            setDeletePost(post._id);
          }}
        >
          Ta bort
        </span>
      ),
    },
    {
      text: (
        <>
          {openModal === false ? (
            <span onClick={handleOpenModal}> Redigera </span>
          ) : (
            <>
              <PostModal
                openModal={openModal}
                post={post}
                handleCloseModal={handleCloseModal}
              />
            </>
          )}
        </>
      ),
    },
  ];

  return (
    <PostContainer>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={profilePicture} alt="" />

            <span className="postUsername">{auth.name}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>

          {auth._id ? (
            <div className="postTopRight">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                property={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                <div>
                  {options.map((option) => (
                    <MenuItem key={option}>{option.text}</MenuItem>
                  ))}
                </div>
              </Menu>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="postCenter">

         


          <img
            className="postImg"
            src={`http://localhost:8080/images/` + post.img}
            alt="img"
          />{" "}
          <textarea className="postText" defaultValue={post.desc} readOnly />{" "}
        </div>
      </div>
    </PostContainer>
  );
};

export default Post;
