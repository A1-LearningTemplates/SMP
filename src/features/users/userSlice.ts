import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Id } from "../../../convex/_generated/dataModel";

type UserState = {
  userId: Id<"users">;
};
const usersSlice = createSlice({
  name: "users",
  initialState: <UserState>{
    userId: localStorage.getItem("userId"),
  },
  reducers: {
    setUserId(state, action: PayloadAction<Id<"users">>) {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
    },
    removeUserId(state) {
      state.userId = "" as Id<"users">;
      localStorage.removeItem("userId");
    },
  },
});

export const { setUserId, removeUserId } = usersSlice.actions;
export default usersSlice.reducer;
