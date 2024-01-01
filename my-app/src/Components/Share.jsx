import React from "react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { PermMedia, Cancel } from "@mui/icons-material";
import ShareToSocialMedia from "../Components/ShareToSocialMedia";

import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
const Share = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const desc = useRef();
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    window.location.reload();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: auth._id,
      desc: desc.current.value,
      title: title,
    };
    if (file) {
      const fd = new FormData();
      const fileName = Date.now() + file.name;
      fd.append("name", fileName);
      fd.append("file", file);
      newPost.img = fileName;

      console.log(newPost);

      await axios
        .post("/api/upload", fd)
        .then((res) => setImage(res.data[0].image))
        .catch((err) => console.log(err));
    }
    try {
      await axios.post("/api/posts", newPost);

      handleOpenModal();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(file);
  console.log(desc);

  return (
    <ShareContainer>
      <div className="shareWrapper">
        <form onSubmit={submitHandler}>
          <div className="shareTop">
            <input
              placeholder={"Titel..."}
              onChange={(e) => setTitle(e.target.value)}
              className="shareTitle"
            />
            {file && (
              <div className="shareImgContainer">
                <img className="shareImg" src={URL.createObjectURL(file)} />
                <Cancel
                  className="shareCancelImg"
                  onClick={() => setFile(null)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}
            <textarea
              placeholder={"What's on your mind?"}
              className="shareInput"
              ref={desc}
              required
            />

            <hr className="shareHr" />
          </div>

          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <label htmlFor="file" className="shareOption">
                  <PermMedia htmlColor="tomato" className="shareIcon" />
                  <span className="shareOptionText">Bild eller video</span>

                  <input
                    className="postImg"
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            <button className="shareButton">Dela inlägg</button>

            <ShareToSocialMedia
              openModal={openModal}
              handleCloseModal={handleCloseModal}
            />
          </div>
        </form>
      </div>
    </ShareContainer>
  );
};

export default Share;

export const ShareContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);

  .shareWrapper {
    padding: 20px;
    background-color: white;
  }

  .shareTop {
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .shareTitle {
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
  .shareInput {
    margin: 15px;
    color: black;
    align-items: center;
    display: flex;
    width: 100%;
    max-height: 5vh;
    outline: none;
    resize: none;
    font-size: 16px;
    margin-top: 20px;
    border: 0;
    border-radius: 0;
    border-color: #bfbfbf;
    padding: 2px;
  }

  .shareProfileImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .shareInput:focus {
    outline: none;
  }

  .shareHr {
    margin: 15px;
  }

  .shareBottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .shareOptions {
    display: flex;
    margin-left: 20px;
    margin: 10px;
    justify-content: space-between;
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

  .shareImg {
    object-fit: fill;
    max-width: 50vw;
    width: 100%;
  }
`;
