import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  posts: Array<{ _id: string; body: string; media: string; title: string }>;
}
const postsSlice = createSlice({
  name: "posts",
  initialState: <PostState>{
    posts: [],
  },
  reducers: {
    setPostState(state, action) {
      state.posts = action.payload;
    },
  },
});
