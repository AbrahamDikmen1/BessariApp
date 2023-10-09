import { useEffect, useState } from "react";
import Post from "../Components/post/Post";
import { useSelector } from "react-redux";
import axios from "axios";
import { FeedContainer } from "../Components/feed/styledFeed";

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/api/posts`);

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
          {posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </div>
      </div>
    </FeedContainer>
  );
};

export default NewsPage;
