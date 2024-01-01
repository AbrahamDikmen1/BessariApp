import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../features/authSlice";
import styled from "styled-components";
import { Container } from "@mui/material";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(user));
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <section className="loginHeading">
          <h1> Welcome Admin </h1>
        </section>
        <section>
          <input
            placeholder="Display name"
            type="text"
            variant="outlined"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

          <input
            placeholder="Password"
            type="password"
            variant="outlined"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </section>

        <button type="submit" variant="contained">
          {auth.loginStatus === "pending" ? "Submiting" : "Log in"}
        </button>

        {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      </form>

      <div className="emptyBottom"></div>
    </LoginContainer>
  );
};

export default AdminPage;
export const LoginContainer = styled(Container)`
  margin: 7vh auto;
  width: 100%;
  text-align: center;
  background-color: rgb(69, 101, 126);

  h1 {
    margin-top: 5vh;
    color: white;
    text-transform: uppercase;
    margin-bottom: 5vh;
  }

  @media screen and (min-width: 380px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 10px;
      input {
        align-items: center;
        justify-content: center;
        margin-top: 6vh;
        background-color: transparent;
        padding: 2vh;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: black;
        background-color: white;
        width: 80%;
        font-size: 1.3rem;

        &:focus {
          border: 0.1rem solid #997af0;
          outline: none;
        }
      }

      button {
        background-color: #c4d8ca;
        color: rgb(69, 101, 126);
        padding: 2vh 5%;
        border: 0;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.5vh;
        font-size: 1rem;
        text-transform: uppercase;
        margin-top: 4vh;
        margin-bottom: 1vh;
        transition: 0.5s ease-ease-in-out;
        &:hover {
          background-color: #a4b893;
        }
      }

      p {
        margin-top: 1vh;
        margin-bottom: 1vh;
        color: #ffbe33;
      }

      span {
        color: white;
        margin-top: 2vh;
        margin-bottom: 2vh;
        a {
          color: #c4d8ca;
          text-decoration: none;
          font-weight: bold;
        }
      }
    }
  }

  .emptyBottom {
    height: 17rem;
  }
`;
