import React from "react";
import { useState } from "react";
import { PostContainer } from "./styledPost";
import { PermMedia, Cancel } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
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

  const [desc, setDesc] = useState(post.desc);
  const [id, setId] = useState(post._id);
  const [date, setDate] = useState(post.createdAt);
  const [img, setImg] = useState(post.img);
  const [file, setFile] = useState("");

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: auth._id,
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
      {
        console.log(err, "2");
      }
    }
  };

  return (
    <>
      Redigera
      <Modal open={openModal}>
        <PostContainer>
          <Box
            sx={{
              ...style,
              maxWidth: "60%",
              maxHeight: "70%",
              textAlign: "center",
            }}
          >
            <form>
              <span className="postDate">{format(post.createdAt)}</span>
              <div className="modal-card-customization">
                <textarea
                  required
                  type="text"
                  color="black"
                  defaultValue={post.desc}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />

                {file ? (
                  <>
                    <div className="shareImgContainer">
                      <img
                        className="postImg"
                        src={URL.createObjectURL(file)}
                        height={350}
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

              <div style={{ justifyContent: "end", marginTop: "2vh" }}>
                <Button onClick={handleCloseModal}>Tillbaka</Button>
                <Button onClick={handleUpdatePost}>Ändra</Button>
              </div>
            </form>
          </Box>
        </PostContainer>
      </Modal>
    </>
  );
};

export default PostModal;
