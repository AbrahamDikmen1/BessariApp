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
  const [image, setImage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: auth._id,
      desc: desc.current.value,
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
      window.location.reload();
    } catch (err) {
      {
        console.log(err, "2");
      }
    }
  };

  console.log(image);
  return (
    <ShareContainer>
      <form onSubmit={submitHandler}>
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src={profilePicture} alt="" />

            <textarea
              placeholder={"What's in your mind " + auth.name + "?"}
              className="shareInput"
              ref={desc}
              rows={10}
            />
          </div>
          <hr className="shareHr" />
          {file && (
            <div className="shareImgContainer">
              <img
                className="shareImg"
                src={URL.createObjectURL(file)}
                alt=""
                height={80}
              />
              <Cancel
                className="shareCancelImg"
                onClick={() => setFile(null)}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <label htmlFor="file" className="shareOption">
                  <PermMedia htmlColor="tomato" className="shareIcon" />
                  <span className="shareOptionText">Photo or Video</span>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
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
