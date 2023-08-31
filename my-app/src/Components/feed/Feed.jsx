import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import { useSelector } from "react-redux";
import axios from "axios";
import { FeedContainer } from "./styledFeed";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = auth.name
        ? await axios.get("/posts/profile" + auth.name)
        : await axios.get("/posts/timeline" + auth._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [auth.name, auth._id]);

  return (
    <FeedContainer>
      <div className="feed">
        <div className="feedWrapper">
          {(!auth.name || auth.name === auth.name) && <Share />}
          {posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </div>
      </div>
    </FeedContainer>
  );
};

export default Feed;
