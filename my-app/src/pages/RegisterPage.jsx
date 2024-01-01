import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "@mui/material";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  console.log(auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(user));
  };

  useEffect(() => {
    if (auth.registerStatus === "success") {
      navigate("/login");
    }
  }, [auth.registerStatus, navigate]);

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>

        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <input
          placeholder="Confirm password"
          type="password"
          onChange={(e) =>
            setUser({ ...user, repeat_password: e.target.value })
          }
        />

        <button type="submit">
          {auth.registerStatus === "pending" ? "Submiting" : "Create user"}
        </button>

        {auth.registerStatus === "rejected" ? (
          <span className="registerError"> {auth.registerError} </span>
        ) : null}

        <p>
          By signing up, you agree to our Terms. Learn how we collect, use and
          share your data in our Data Policy and how we use cookies and similar
          technology in our Cookies Policy
        </p>

        <span>
          Already Have an account ? <Link to="/login">Login</Link>
        </span>
      </form>

      <div className="emptyBottom"></div>
    </RegisterContainer>
  );
};

export default RegisterPage;

export const RegisterContainer = styled(Container)`
  margin: 3vh auto;
  width: 100%;
  text-align: center;
  background-color: rgb(69, 101, 126);
  align-items: center;

  h1 {
    color: white;
    text-transform: uppercase;
  }

  @media screen and (min-width: 380px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5vh;
      padding: 10px;
      input {
        margin-top: 3vh;
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
        margin-top: 3vh;
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
    height: 6rem;
  }
`;
