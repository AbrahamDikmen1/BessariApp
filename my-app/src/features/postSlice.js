// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   newPost: [],
//   postStatus: "",
//   postError: "",

//   postLoaded: false,
//   imageLoaded: false,
// };

// export const uploadPost = createAsyncThunk(
//   "post/uploadPost",
//   async (newPost, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const post = await axios.post(
//         `/api/posts`,
//         {
//           newPost,
//         },
//         config
//       );

//       return post.data;
//     } catch (err) {
//       console.log(err.response.data);
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const postSlice = createSlice({
//   name: "post",
//   initialState,
//   reducers: {
//     loadPosts(state, action) {
//       return {
//         ...state,
//         newpost: [],

//         postLoaded: true,
//       };
//     },
//   },

//   extraReducers: (builder) => {
//     builder.addCase(uploadPost.pending, (state, action) => {
//       return { ...state, postError: "pending" };
//     });
//     builder.addCase(uploadPost.fulfilled, (state, action) => {
//       return { ...state, postLoaded: false, postStatus: "success" };
//     });
//     builder.addCase(uploadPost.rejected, (state, action) => {
//       return {
//         ...state,
//         postStatus: "rejected",
//         postError: action.payload,
//       };
//     });
//   },
// });

// export const { loadPosts } = postSlice.actions;
// export default postSlice.reducer;
