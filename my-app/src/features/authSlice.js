import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import jwtDecode from "jwt-decode";

const initialState = {
  _id: "",
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  isAdmin: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const token = await axios.post(
        `/api/user/login`,
        {
          name: user.name,
          password: user.password,
        },
        config
      );

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          userLoaded: true,
        };
      }
    },
    async logoutUser(state, action) {
      localStorage.removeItem("token");

      await axios.post("/api/user/logOut").then((response) => {
        return {
          response,
          ...state,
          _id: "",
          token: "",
          name: "",
          email: "",
          isAdmin: "",

          loginStatus: "",
          loginError: "",
          userLoaded: false,
        };
      });
    },
  },
  extraReducers: (builder) => {
    // Login user
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          _id: user._id,
          token: action.payload,
          name: user.name,
          email: user.email,
          isAdmin: "",
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
