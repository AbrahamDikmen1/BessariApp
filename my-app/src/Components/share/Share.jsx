import React from "react";
import { useRef, useState } from "react";

import { useSelector } from "react-redux";
import { PermMedia, Cancel } from "@mui/icons-material";

import { ShareContainer } from "./styledShare";

import profilePicture from "../../assets/nedladdning.jpg";
import axios from "axios";

const Share = () => {
  const auth = useSelector((state) => state.auth);

  const desc = useRef();
  const [file, setFile] = useState(null);
  console.log(auth._id);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: auth._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/api/upload", data);
      } catch (err) {
        console.log(err, "1");
      }
    }
    try {
      await axios.post("/api/posts", newPost);
      window.location.reload();
    } catch (err) {
      {
        console.log(err, "2");
      }
    }
  };
  console.log(file);
  return (
    <ShareContainer>
      <form onSubmit={submitHandler}>
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src={profilePicture} alt="" />

            <input
              placeholder={"What's in your mind " + auth.name + "?"}
              className="shareInput"
              ref={desc}
            />
          </div>
          <hr className="shareHr" />
          {file && (
            <div className="shareImgContainer">
              <img
                className="shareImg"
                src={URL.createObjectURL(file)}
                alt=""
              />
              <Cancel
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
            </div>
          )}
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </form>
    </ShareContainer>
  );
};

export default Share;
