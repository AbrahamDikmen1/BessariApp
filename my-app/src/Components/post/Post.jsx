import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import profilePicture from "../../assets/nedladdning.jpg";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import PostModal from "./PostModal";
const ITEM_HEIGHT = 48;

const Post = ({ post, setDeletePost }) => {
  const auth = useSelector((state) => state.auth);
  const [date, setDate] = useState(post.createdAt);
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
  useEffect(() => {
    const date = new Date();
    const fetchPosts = async () => {
      setDate(
        date
          .toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .split("/")
          .reverse()
          .join("/")
      );
    };
    fetchPosts();
  }, []);

  return (
    <PostContainer>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={profilePicture} alt="" />
            <div className="postTopDateUsername">
              <span className="postUsername">Alán Ali</span>
              <br />
              <span className="postDate"> {date}</span>
            </div>
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
        <hr />
        <div className="postCenter">
          <div className="pTitle">
            <h2> {post.title}</h2>
          </div>

          <img
            className="postImg"
            src={`http://localhost:8080/images/` + post.img}
            alt="img"
          />
          <div className="postText">
            <p>{post.desc}</p>
          </div>
        </div>
      </div>
    </PostContainer>
  );
};

export default Post;
export const PostContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  background-color: #ffffffeb;

  .postWrapper {
    padding: 10px 0;
    margin-top: 3rem;
    margin-bottom: 5rem;
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
    margin-left: 10px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
  }

  .postUsername {
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
  }

  .postDate {
    margin-left: 9px;
    font-size: 16px;
  }

  .postCenter {
    align-items: center;
    text-align: center;
  }

  .pTitle {
    color: black;
    font-size: 25px;
    font-weight: bold;
  }

  .postImg {
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }

  .postText {
    text-align: left;
    margin-top: 20px;
    cursor: default;
    padding: 1rem 2rem 1rem 2rem;

    line-height: 1.4;
    font-size: 1.3rem;
  }

  .postText p {
    color: black;
    display: inline-block;
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
  }
  hr {
    margin: 20px;
  }
`;
