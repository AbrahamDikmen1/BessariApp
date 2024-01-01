import { useEffect, useState, useRef } from "react";
import Post from "./post/Post";
import Share from "./Share";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

const Feed = () => {
  const auth = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  const [deletePost, setDeletePost] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = auth.name
        ? await axios.get(`/api/posts/profile/` + auth.name)
        : await axios.get(`/api/posts/timeline/` + auth._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [auth.name, auth._id]);

  useEffect(() => {
    const handleDeletePost = async () => {
      if (deletePost) {
        await axios.delete(`/api/posts/` + deletePost._id);

        window.location.reload();
      }
    };
    handleDeletePost();
  }, [deletePost]);

  console.log(posts);
  console.log(deletePost);
  return (
    <FeedContainer>
      {<Share />}

      <div className="feedWrapper">
        {posts.map((p) => (
          <Post key={p._id} post={p} setDeletePost={setDeletePost} />
        ))}
      </div>
    </FeedContainer>
  );
};

export default Feed;

export const FeedContainer = styled.div`
  margin-top: 5rem;

  margin-left: auto;
  margin-right: auto;
  max-width: 70rem;

  .feedWrapper {
    background-color: rgba(69, 101, 126, 0.041);
  }

  h1 {
    color: black;
  }
`;
