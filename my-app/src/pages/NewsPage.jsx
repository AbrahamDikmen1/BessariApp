import { useEffect, useState } from "react";
import Post from "../Components/post/Post";
import { useSelector } from "react-redux";
import axios from "axios";

import styled from "styled-components";
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

  console.log(posts.createdAt);
  return (
    <NewsContainer>
      <h1>Nyheter</h1>
      <div className="newsWrapper">
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </NewsContainer>
  );
};

export default NewsPage;

export const NewsContainer = styled.div`
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 70rem;

  h1 {
    margin-left: 5px;
    color: #2c2c2cb3;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
