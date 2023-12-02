import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Id } from "../../../convex/_generated/dataModel";

type UserState = {
  userId: Id<"users">;
  users: UserObject[] | [];
};
type UserObject = {
  _id: Id<"users">;
  email: string;
  is_active: boolean;
  nickname: string;
  picture: string;
  _creationTime: number;
};
const usersSlice = createSlice({
  name: "users",
  initialState: <UserState>{
    userId: localStorage.getItem("userId"),
    users: [],
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
    setUsers(state, action: PayloadAction<Array<UserObject>>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<UserObject>) {
      state.users = [action.payload, ...state.users];
    },
    RemoveUser(state, action: PayloadAction<string>) {
      // state.users = [action.payload, ...state.users];
    },
  },
});

export const {
  setUserId,
  removeUserId,
  setUsers,
  addUser,
  RemoveUser,
} = usersSlice.actions;
export default usersSlice.reducer;
