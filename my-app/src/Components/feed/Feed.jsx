import { useEffect, useState, useRef } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import { useSelector } from "react-redux";
import axios from "axios";
import { FeedContainer } from "./styledFeed";

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
        await axios.delete(`/api/posts/` + deletePost);
        window.location.reload();
      }
    };
    handleDeletePost();
  }, [deletePost]);

  console.log(posts);
  return (
    <FeedContainer>
      <div className="feed">
        <div className="feedWrapper">
          {<Share />}
          {posts.map((p) => (
            <Post key={p._id} post={p} setDeletePost={setDeletePost} />
          ))}
        </div>
      </div>
    </FeedContainer>
  );
};

export default Feed;
