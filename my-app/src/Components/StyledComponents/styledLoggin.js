import styled from "styled-components";
import { Container } from "@mui/material";

export const LoginContainer = styled(Container)`
  margin: 10vh auto;
  width: 100%;
  text-align: center;
  color: white;
  align-items: center;
  background-color: #1976d2;
 border-radius: 1rem;
  form {
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    h1 {
      margin-top: 5vh;
      color: white;
      text-transform: uppercase;
      font-family: Irish Grover;
    }

    input {
      margin-top: 3vh;
      background-color: transparent;
      padding: 2vh;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 60%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }

    button {
      background-color: #00000076;
      color: white;
      padding: 2vh 5%;
      border: 0;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.8vh;
      font-size: 1rem;
      text-transform: uppercase;
      margin-top: 3vh;
      margin-bottom: 1vh;

      transition: 0.5s ease-ease-in-out;
      &:hover {
        background-color: #00000076;
      }
    }
  }
`;
