import UserAvatar, { UserInfo } from "../Users/UserAvatar";
import { Id } from "../../../convex/_generated/dataModel";
import { memo } from "react";
type MessengerUserType = {
  users: UserInfo[];
  show: boolean;
  onUserClick: (user: UserInfo) => void;
  userId: Id<"users">;
};

const MessengerUser = memo(
  ({ users, show, onUserClick, userId }: MessengerUserType) => {
    return (
      <div
        className={`md:flex flex-col md:items-start md:p-2 h-full gap-2 w-full md:w-48 bg-slate-50 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch  ${
          show ? "hidden" : "flex"
        } `}
      >
        <h2 className="text-2xl font-bold self-center">Online</h2>
        <div className="flex flex-wrap md:flex-nowrap md:flex-col md:items-start gap-2">
          {users?.map(
            (user) =>
              user?._id !== userId && (
                <UserAvatar
                  key={user?._id}
                  user={user}
                  onUserClick={onUserClick}
                />
              )
          )}
        </div>
      </div>
    );
  }
);

export default MessengerUser;
