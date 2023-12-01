import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./posts/postsSlice";
import userReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,

  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
