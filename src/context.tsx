import { ReactNode, createContext, useState } from "react";
import { Id } from "../convex/_generated/dataModel";
import { UserInfo } from "./components/Users/UserAvatar";
type UserId = Id<"users"> | null;

interface ContextProps {
  readonly userId: UserId;
  readonly setUserId: (payload: UserId) => void;
  removeUserId: () => void;
  readonly userMessenger: UserInfo;
  setUserMessenger: (payload: UserInfo) => void;
}

export const UserContext = createContext<ContextProps>({
  userId: null,
  setUserId: () => null,
  removeUserId: () => null,
  userMessenger: null,
  setUserMessenger: () => null,
});

const UserProvider = (props: { children: ReactNode }) => {
  const [id, setId] = useState<UserId | null>(
    localStorage.getItem("userId") as Id<"users">
  );
  const [userMessenger, setMessenger] = useState<UserInfo | null>(null);
  const setUserId = (payload: UserId) => {
    setId(payload);
    localStorage.setItem("userId", payload as "string");
  };
  const removeUserId = () => {
    setId(null);
    localStorage.removeItem("userId");
  };
  const setUserMessenger = (payload: UserInfo) => {
    setMessenger(payload);
  };
  const value = {
    userId: id,
    setUserId,
    removeUserId,
    userMessenger,
    setUserMessenger,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
