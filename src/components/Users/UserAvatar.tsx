import { memo } from "react";
import { Id } from "../../../convex/_generated/dataModel";

import ActiveUser from "./ActiveUser";
export type UserInfo = {
  _id: Id<"users">;
  picture: string;
  is_active: boolean;
  nickname: string;
} | null;
type UserAvatarProps = {
  onUserClick: (user: UserInfo) => void;
  user: UserInfo;
};
const UserAvatar = memo(({ user, onUserClick }: UserAvatarProps) => {
  return (
    <div
      key={user?._id}
      className="relative flex justify-center items-center cursor-pointer gap-2 py-2"
      onClick={() => onUserClick(user)}
    >
      <div className="relative flex justify-center items-center gap-2">
        <img
          className="w-8 h-8 rounded-full"
          src={user?.picture}
          alt={user?.nickname}
        />
        <ActiveUser is_active={user?.is_active} />
      </div>

      <p className="text-xl">{user?.nickname}</p>
    </div>
  );
});

export default UserAvatar;
