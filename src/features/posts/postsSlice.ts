import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface PostType {
  _id: string;
  body: string;
  media: string;
  title: string | undefined;
}
interface PostState {
  posts: Array<PostType>;
}
const postsSlice = createSlice({
  name: "posts",
  initialState: <PostState>{
    posts: [],
  },
  reducers: {
    setPosts(state, action: PayloadAction<Array<PostType>>) {
      state.posts = action.payload;
    },
    addPost(state, action: PayloadAction<PostType>) {
      state.posts = [action.payload, ...state.posts];
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;
