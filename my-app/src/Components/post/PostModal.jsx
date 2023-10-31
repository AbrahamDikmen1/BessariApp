import React from "react";
import { useState } from "react";

import { PermMedia, Cancel } from "@mui/icons-material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

const style = {
  m: "14vh auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
};

const PostModal = ({ openModal, post, handleCloseModal }) => {
  const auth = useSelector((state) => state.auth);
  const [title, setTitle] = useState(post.title);
  const [desc, setDesc] = useState(post.desc);

  const [img, setImg] = useState(post.img);
  const [file, setFile] = useState("");

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: auth._id,
      title: title,
      desc: desc,
      img: img,
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
        .then((res) => setImg(res.data[0].img))
        .catch((err) => console.log(err));
    }
    try {
      await axios.put(`/api/posts/${post._id}`, newPost);
      window.location.reload();
    } catch (err) {
      console.log(err, "2");
    }
  };

  return (
    <>
      Redigera
      <Modal open={openModal}>
        <PostModalContainer>
          <Box
            sx={{
              ...style,
              maxWidth: "60%",
              maxHeight: "70%",
              textAlign: "center",
            }}
          >
            <form>
              <span className="postDate"></span>
              <div className="modal-card-customization">
                <textarea
                  className="postTitle"
                  type="text"
                  defaultValue={post.title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                {file ? (
                  <>
                    <div className="shareImgContainer">
                      <img
                        className="postImg"
                        src={URL.createObjectURL(file)}
                        height={350}
                        alt=""
                      />
                    </div>
                    <div>
                      <Cancel
                        className="updateCancelImg"
                        onClick={() => setFile(null)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <img
                      className="postImg"
                      src={`http://localhost:8080/images/` + post.img}
                      alt="img"
                    />
                  </div>
                )}

                <textarea
                  required
                  type="text"
                  color="black"
                  defaultValue={post.desc}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />

                <div className="updateBottom">
                  <label className="updateOption">
                    <PermMedia htmlColor="tomato" className="updateIcon" />
                    <span className="updateOptionText">Ändra bild </span>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      accept=".png,.jpeg,.jpg"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>

              <div>
                <Button onClick={handleCloseModal}>Tillbaka</Button>
                <Button onClick={handleUpdatePost}>Ändra</Button>
              </div>
            </form>
          </Box>
        </PostModalContainer>
      </Modal>
    </>
  );
};

export default PostModal;

export const PostModalContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;

  //Post modal

  .modal-card-customization {
    .postTitle {
      text-align: center;
      align-items: center;
      font-weight: bold;
      font-size: 40px;
      border-color: black;
    }
    .modalImg {
      margin-top: 20px;
      width: 100%;
      max-height: 500px;
      object-fit: contain;
    }

    textarea {
      margin-bottom: 10px;
      display: flex;
      width: 100%;
      height: 70px;
      outline: none;
      resize: none;
      font-size: 16px;
      margin-top: 20px;
      border-radius: 5px;
      border-color: #bfbfbf;
      padding: 2px;
    }
    textarea:is(:focus, :valid) {
      border-width: 2px;
      border-color: #4671ea;
    }

    .postImg {
      margin-top: 20px;
      width: 100%;
      max-height: 500px;
      object-fit: contain;
    }
  }

  .postBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .postBottomLeft {
    display: flex;
    align-items: center;
  }

  .shareBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .shareOptions {
    display: flex;
    margin-left: 20px;
    margin: 10px;
  }

  .updateOption {
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
  }

  .updateIcon {
    font-size: 18px;
    margin-right: 3px;
  }

  .updateOptionText {
    font-size: 14px;
    font-weight: 500;
  }
`;
