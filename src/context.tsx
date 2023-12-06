import { ReactNode, createContext, useState } from "react";
import { Id } from "../convex/_generated/dataModel";
type UserId = Id<"users"> | null;

interface ContextProps {
  readonly userId: UserId;
  readonly setUserId: (payload: UserId) => void;
  removeUserId: () => void;
  userMessenger: UserId;
  setUserMessenger: (payload: UserId) => void;
}

export const UserContext = createContext<ContextProps>({
  userId: null,
  setUserId: () => null,
  removeUserId: () => null,
  userMessenger: null,
  setUserMessenger: () => null,
});

const UserProvider = (props: { children: ReactNode }) => {
  const [id, setId] = useState<UserId | null>(null);
  const [userMessenger, setMessenger] = useState<UserId | null>(null);
  const setUserId = (payload: UserId) => {
    setId(payload);
  };
  const removeUserId = () => {
    setId(null);
  };
  const setUserMessenger = (payload: UserId) => {
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
