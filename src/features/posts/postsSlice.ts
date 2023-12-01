import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Id } from "../../../convex/_generated/dataModel";
export interface PostType {
  _id: Id<"posts">;
  _creationTime: number;
  body?: string | undefined;
  media?: string | undefined;
  userId: Id<"users">;
  title: string;
  user: {
    _id: Id<"users">;
    _creationTime: number;
    email: string;
    is_active: boolean;
    picture: string;
    nickname: string;
  } | null;
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
